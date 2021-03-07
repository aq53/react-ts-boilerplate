import { takeEvery, put, call } from "redux-saga/effects";
import { loadMockReport, saveMockReport } from "../actions";
import { ACTION_TYPES } from "../constants/actionTypes";
import { IClientResponse } from "../interfaces";
import { MockReportApiService } from "../services";

function* getMockReport() {
  yield put(loadMockReport());
  const reports: IClientResponse = yield call(
    MockReportApiService.getMockReport
  );
  if (!reports.hasErrors) {
    yield put(saveMockReport(reports.result));
  }
}

export function* watchGetMockReport() {
  yield takeEvery(ACTION_TYPES.MOCK_REPORT.GET_MOCK_REPORT, getMockReport);
}
