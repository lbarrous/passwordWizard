import { Step, ValidationObject } from "./../../../store/types.d";
export interface ProgressStep {
  stepId: Step;
  label: string;
  validator?: (...args: any[]) => ValidationObject;
}

export enum StepStates {
  NOT_STARTED = "not_started",
  CURRENT = "current",
  ERROR = "error",
  COMPLETED = "completed"
}
