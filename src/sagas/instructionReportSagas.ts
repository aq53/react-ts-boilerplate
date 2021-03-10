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
  yield put(loadInstructionReport());
  let instructions = [...inboundInstructions];
  if (action.payload.fromDate && action.payload.toDate) {
    instructions = instructions.filter(
      (item: any) =>
        new Date(item.createdAt.$date) >= action.payload.fromDate &&
        new Date(item.createdAt.$date) <= action.payload.toDate
    );
  }

  const reports: IClientResponse = {
    hasErrors: false,
    result: {
      data: instructions,
      paging: {
        total: instructions.length,
        totalPages: Math.ceil(instructions.length / 10),
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
