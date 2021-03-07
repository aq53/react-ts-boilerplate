import { ACTION_TYPES } from "../constants/actionTypes";
import { IMockReportAction } from "../interfaces";

const initialState = {
  loading: false,
  data: [],
};

export const mockReportReducer = (
  state = initialState,
  action: IMockReportAction
) => {
  switch (action.type) {
    case ACTION_TYPES.MOCK_REPORT.LOAD_MOCK_REPORT:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.MOCK_REPORT.SAVE_MOCK_REPORT:
      return {
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
