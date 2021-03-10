import { all } from "redux-saga/effects";

import { watchGetMockReport } from "./mockReportSagas";
import {
  watchGetInstructionReport,
  watchFilterInstructionReport,
} from "./instructionReportSagas";

export default function* rootSaga() {
  yield all([
    watchGetMockReport(),
    watchGetInstructionReport(),
    watchFilterInstructionReport(),
  ]);
}
