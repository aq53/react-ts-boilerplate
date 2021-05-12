import { takeEvery, put, call } from "redux-saga/effects";
import { loadInstructionReport, saveInstructionReport } from "../actions";
import { ACTION_TYPES } from "../constants/actionTypes";
import { IClientResponse, IFilterPayload } from "../interfaces";
import inboundInstructions from "../sampleData/inboundinstructions.json";

function* getInstructionReport() {
  yield put(loadInstructionReport());
  const reports: IClientResponse = {
    hasErrors: false,
    result: {
      data: inboundInstructions,
      paging: {
        total: inboundInstructions.length,
        totalPages: Math.ceil(inboundInstructions.length / 10),
        pageNumber: 1,
        pageSize: 10,
      },
    },
    status: 200,
    statusText: "Successfull",
  };

  // call api service here

  if (!reports.hasErrors) {
    yield put(saveInstructionReport(reports.result));
  }
}

function* filterInstructionReport(action: {
  type: string;
  payload: IFilterPayload;
}) {
    console.log("payload::", action)
    debugger
    yield put(loadInstructionReport());
    // let instructions = [...inboundInstructions];
    let data = store.getState().qEC_IPE_1_Report.data;

    if (action.payload.fromDate && action.payload.toDate) {
      var filterData = [] 
      instructions.forEach(
        (item: any) =>
          {
            var rv = true
            Object.entries(action.payload.keyword).filter(([key, value]) => {
              if (String(item[key]).trim() != String(action.payload.keyword[key]).trim()) {
                rv = false
              }
            })
            rv==true && filterData.push(item)
          } 
      );
  }

  const reports: IClientResponse = {
    hasErrors: false,
    result: {
      data: filterData,
      paging: {
        total: filterData.length,
        totalPages: Math.ceil(filterData.length / 10),
        pageNumber: action.payload.pageNumber || 1,
        pageSize: 10,
      },
    },
    status: 200,
    statusText: "Successfull",
  };

  // call api service here

  if (!reports.hasErrors) {
    yield put(saveInstructionReport(reports.result));
  }
}

export function* watchGetInstructionReport() {
  yield takeEvery(
    ACTION_TYPES.INSTRUCTION_REPORT.GET_INSTRUCTION_REPORT,
    getInstructionReport
  );
}

export function* watchFilterInstructionReport() {
  yield takeEvery(
    ACTION_TYPES.INSTRUCTION_REPORT.FILTER_INSTRUCTION_REPORT,
    filterInstructionReport
  );
}
