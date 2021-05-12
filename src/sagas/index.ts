import { all } from "redux-saga/effects";

import { watchGetMockReport } from "./mockReportSagas";
import { watch_get_qec_ipe_1_report, watch_filter_qec_ipe_1_report, watch_sort_qec_ipe_1_report } from "./qec_ipe_1_report_saga";
import {
  watchGetInstructionReport,
  watchFilterInstructionReport,

} from "./instructionReportSagas";

export default function* rootSaga() {
  yield all([
    watchGetMockReport(),
    watchGetInstructionReport(),
    watchFilterInstructionReport(),
    watch_get_qec_ipe_1_report(),
    watch_filter_qec_ipe_1_report(),
    watch_sort_qec_ipe_1_report(),
  ]);
}
