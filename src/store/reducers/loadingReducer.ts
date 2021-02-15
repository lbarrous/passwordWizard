import { LoadingState } from "../types";
import { LoadingActionTypes, SET_LOADING, SET_RESPONSE } from './../actions/Loading';
import { createReducer } from "./reducerFactory";


const initialState: LoadingState = {
  isLoading: false,
  responseFromServer: 0
};

const setLoadingStatus = (state: LoadingState, action: LoadingActionTypes) => {
  return {
    ...state,
    isLoading: action.payload
  };
};

const setResponseFromServerStatus = (state: LoadingState, action: LoadingActionTypes) => {
  return {
    ...state,
    responseFromServer: action.payload
  };
};

const strategies = {
  [SET_LOADING]: setLoadingStatus,
  [SET_RESPONSE]: setResponseFromServerStatus,
};

type TypeOfStrategies = typeof strategies;

const stepReducer = createReducer <TypeOfStrategies, LoadingState>(
  strategies,
  initialState
);

export default stepReducer;
