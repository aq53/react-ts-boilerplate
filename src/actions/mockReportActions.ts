import { ACTION_TYPES } from "../constants/actionTypes";

export const getMockReport = () => ({
  type: ACTION_TYPES.MOCK_REPORT.GET_MOCK_REPORT,
});

export const loadMockReport = () => ({
  type: ACTION_TYPES.MOCK_REPORT.LOAD_MOCK_REPORT,
});

export const saveMockReport = (payload: any) => ({
  type: ACTION_TYPES.MOCK_REPORT.SAVE_MOCK_REPORT,
  payload,
});
