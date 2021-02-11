import { StepActionTypes } from "../actions/Step";
import { StepState, StepValues } from "../types.d";
import { createReducer } from "./reducerFactory";

const initialState: StepState = {
  currentStep: StepValues.STEP1
};

const changeStep = (state: StepState, action: StepActionTypes) => {
  //TODO: Change step and return state
  return state;
};

const strategies = {
  CHANGE_STEP: changeStep,
};

type TypeOfStrategies = typeof strategies;

const stepReducer = createReducer <TypeOfStrategies, StepState>(
  strategies,
  initialState
);

export default stepReducer;
