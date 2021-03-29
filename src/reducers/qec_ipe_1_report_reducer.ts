import { ACTION_TYPES } from "../constants/actionTypes";
import { I_qec_ipe_1_report_action } from "../interfaces";

const initialState = {
  loading: false,
  data: [],
  paging: {
    total: 0,
    totalPages: 0,
    pageNumber: 0,
    pageSize: 0,
  },
};

export const qec_ipe_1_report_reducer = (
  state = initialState,
  action: I_qec_ipe_1_report_action
) => {
  switch (action.type) {
    case ACTION_TYPES.QEC_IPE_1_REPORT.LOAD_QEC_IPE_1_REPORT:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.QEC_IPE_1_REPORT.SAVE_QEC_IPE_1_REPORT:
      return {
        data: action.payload.data,
        paging:action.payload.paging,
        loading: false,
      };

    default:
      return state;
  }
};
