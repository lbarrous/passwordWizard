import { Step } from "./../../../store/types.d";
export interface ProgressStep {
  stepId: Step;
  label: string;
}

export enum StepStates {
  NOT_STARTED = "not_started",
  CURRENT = "current",
  ERROR = "error",
  COMPLETED = "completed"
}
