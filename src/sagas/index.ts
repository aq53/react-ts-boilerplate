import { all } from "redux-saga/effects";

import { watchGetMockReport } from "./mockReportSagas";

export default function* rootSaga() {
  yield all([watchGetMockReport()]);
}
