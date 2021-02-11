import { CHANGE_STEP, StepActionTypes } from "../actions/Step";
import { Step } from "../types";

const changeStep = (step: Step): StepActionTypes => {
  return {
    type: CHANGE_STEP,
    payload: step
  };
};

export default changeStep;
