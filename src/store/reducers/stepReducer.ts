import { StepActionTypes } from "../actions/Step";
import { StepState, StepValues } from "../types.d";

const initialState: StepState = {
  currentStep: StepValues.STEP1
};

const changeStep = (state: StepState, action: StepActionTypes) => {
  //TODO: Change step and return state
  console.log(state);
  console.log(action);
};

/* Used to refactor reducer using Strategy pattern: https://en.wikipedia.org/wiki/Strategy_pattern */
const strategies = {
  CHANGE_STEP: changeStep,
  /* More transformers */
  __default__: (state: StepState) => state
};

const stepReducer = (
  state: StepState = initialState,
  action: StepActionTypes
) => {
  const transformer = strategies[action.type] || strategies.__default__;
  return transformer(state, action);
};

export default stepReducer;
