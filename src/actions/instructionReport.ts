import { ACTION_TYPES } from "../constants/actionTypes";
import { IFilterPayload } from "../interfaces";

export const getInstructionReport = () => ({
  type: ACTION_TYPES.INSTRUCTION_REPORT.GET_INSTRUCTION_REPORT,
});

export const loadInstructionReport = () => ({
  type: ACTION_TYPES.INSTRUCTION_REPORT.LOAD_INSTRUCTION_REPORT,
});

export const saveInstructionReport = (payload: any) => ({
  type: ACTION_TYPES.INSTRUCTION_REPORT.SAVE_INSTRUCTION_REPORT,
  payload,
});

export const filterInstructionReport = (payload: IFilterPayload) => ({
  type: ACTION_TYPES.INSTRUCTION_REPORT.FILTER_INSTRUCTION_REPORT,
  payload,
});
