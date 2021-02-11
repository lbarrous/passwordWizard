import { Step } from './../../../store/types.d';
export interface ProgressStep {
    stepId: Step;
    label?: string;
    validator?: (payload?: any) => boolean;
  }