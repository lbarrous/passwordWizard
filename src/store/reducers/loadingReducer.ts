import { LoadingAction, LoadingState } from "../types";
import { createReducer } from "./reducerFactory";


const initialState: LoadingState = {
  isLoading: false
};

const setLoadingStatus = (state: LoadingState, action: LoadingAction) => {
  //TODO: Change step and return state
  return state;
};

const strategies = {
  SET_LOADING: setLoadingStatus,
};

type TypeOfStrategies = typeof strategies;

const stepReducer = createReducer <TypeOfStrategies, LoadingState>(
  strategies,
  initialState
);

export default stepReducer;
