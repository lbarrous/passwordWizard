import { MAX_NUMBER_OF_STEPS, MIN_NUMBER_OF_STEPS } from "../../constants";
import { getStepFromNumber } from "../../utils";
import { NEXT_STEP, PREVIOUS_STEP, StepActionTypes } from "../actions/Step";
import { StepState, StepValues } from "../types.d";
import { createReducer } from "./reducerFactory";

export const initialState: StepState = {
  currentStep: StepValues.STEP1
};

const nextStep = (state: StepState, action: StepActionTypes) => {
  return {
    ...state,
    currentStep: getStepFromNumber(state.currentStep + 1 <= MAX_NUMBER_OF_STEPS ? state.currentStep + 1 : MAX_NUMBER_OF_STEPS)

  }
};

const previousStep = (state: StepState, action: StepActionTypes) => {
  return {
    ...state,
    currentStep: getStepFromNumber(state.currentStep - 1 >= MIN_NUMBER_OF_STEPS ? state.currentStep - 1 : MIN_NUMBER_OF_STEPS)
  }
};

const strategies = {
  [NEXT_STEP]: nextStep,
  [PREVIOUS_STEP]: previousStep
};

type TypeOfStrategies = typeof strategies;

const stepReducer = createReducer <TypeOfStrategies, StepState>(
  strategies,
  initialState
);

export default stepReducer;
