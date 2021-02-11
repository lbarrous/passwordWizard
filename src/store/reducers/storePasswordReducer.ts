import { createReducer } from './reducerFactory';
import { PasswordActionTypes } from "../actions/Password";
import { Password } from "../types";

type PasswordState = {
  password: Password;
};

const initialState: PasswordState = {
  password: {
    pass: "",
    hint: ""
  }
};

const storePassword = (state: PasswordState, action: PasswordActionTypes) => {
  //TODO: Store password and return state
  return state;
};

const strategies = {
  STORE_PASSWORD: storePassword,
};

type TypeOfStrategies = typeof strategies;

const passwordReducer = createReducer <TypeOfStrategies, PasswordState>(
  strategies,
  initialState
);

export default passwordReducer;
