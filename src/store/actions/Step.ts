import { Step } from './../types.d';
export const CHANGE_STEP = 'CHANGE_STEP';

interface ChangeStepActionType {
  type: typeof CHANGE_STEP;
  payload: Step;
}
export type StepActionTypes = ChangeStepActionType;