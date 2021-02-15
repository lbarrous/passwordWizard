import { getStepFromNumber } from "../../utils";
import { isSelectedType, IS_VALIDATED, NEXT_STEP, PREVIOUS_STEP, StepActionTypes } from "../actions/Step";
import { StepState, StepValues } from "../types.d";
import { createReducer } from "./reducerFactory";

const initialState: StepState = {
  currentStep: StepValues.STEP1,
  isValidated: true
};

const nextStep = (state: StepState, action: StepActionTypes) => {
  return {
    ...state,
    currentStep: getStepFromNumber(state.currentStep + 1)

  }
};

const previousStep = (state: StepState, action: StepActionTypes) => {
  return {
    ...state,
    currentStep: getStepFromNumber(state.currentStep - 1)
  }
};

const isValidated = (state: StepState, action: StepActionTypes) => {
  if (isSelectedType(action)) {
    return {
      ...state,
      isValidated: action.payload
    }
  } else {
    return state;
  }

};

const strategies = {
  [NEXT_STEP]: nextStep,
  [PREVIOUS_STEP]: previousStep,
  [IS_VALIDATED]: isValidated
};

type TypeOfStrategies = typeof strategies;

const stepReducer = createReducer <TypeOfStrategies, StepState>(
  strategies,
  initialState
);

export default stepReducer;
