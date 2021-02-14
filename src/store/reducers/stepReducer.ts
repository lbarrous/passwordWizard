import { getStepFromNumber } from "../../utils";
import { NEXT_STEP, PREVIOUS_STEP, StepActionTypes } from "../actions/Step";
import { StepState, StepValues } from "../types.d";
import { createReducer } from "./reducerFactory";

const initialState: StepState = {
  currentStep: StepValues.STEP1
};

const nextStep = (state: StepState, action: StepActionTypes) => {
  return {
    currentStep: getStepFromNumber(state.currentStep + 1)
  }
};

const previousStep = (state: StepState, action: StepActionTypes) => {
  return {
    currentStep: getStepFromNumber(state.currentStep - 1)
  }
};

const strategies = {
  [NEXT_STEP]: nextStep,
  [PREVIOUS_STEP]: previousStep,
};

type TypeOfStrategies = typeof strategies;

const stepReducer = createReducer <TypeOfStrategies, StepState>(
  strategies,
  initialState
);

export default stepReducer;
