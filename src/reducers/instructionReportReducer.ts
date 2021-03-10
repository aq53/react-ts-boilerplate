import { ACTION_TYPES } from "../constants/actionTypes";
import { IInstructionReportAction } from "../interfaces";

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

export const instructionReportReducer = (
  state = initialState,
  action: IInstructionReportAction
) => {
  switch (action.type) {
    case ACTION_TYPES.INSTRUCTION_REPORT.LOAD_INSTRUCTION_REPORT:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.INSTRUCTION_REPORT.SAVE_INSTRUCTION_REPORT:
      return {
        data: action.payload.data,
        paging:action.payload.paging,
        loading: false,
      };

    default:
      return state;
  }
};
