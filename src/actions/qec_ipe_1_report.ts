import { ACTION_TYPES } from "../constants/actionTypes";
import { IFilterPayload } from "../interfaces";

export const get_qec_ipe_1_report = () => ({
  type: ACTION_TYPES.QEC_IPE_1_REPORT.GET_QEC_IPE_1_REPORT,
});

export const load_qec_ipe_1_report = () => ({
  type: ACTION_TYPES.QEC_IPE_1_REPORT.LOAD_QEC_IPE_1_REPORT,
});

export const save_qec_ipe_1_report = (payload: any) => ({
    type: ACTION_TYPES.QEC_IPE_1_REPORT.SAVE_QEC_IPE_1_REPORT,
    payload,
  });


export const filter_qec_ipe_1_report = (payload: IFilterPayload) => ({
  type: ACTION_TYPES.QEC_IPE_1_REPORT.FILTER_QEC_IPE_1_REPORT,
  payload,
});


