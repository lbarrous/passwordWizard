import { PasswordActionTypes } from "../actions/Password";
import { Password } from "../types";
import { STORE_CONFIRMATION_PASSWORD, STORE_HINT, STORE_PASSWORD } from './../actions/Password';
import { createReducer } from './reducerFactory';

type PasswordState = {
  password: Password;
};

export const initialState: PasswordState = {
  password: {
    pass: "",
    confirmation_pass: "",
    hint: ""
  }
};

const storePassword = (state: PasswordState, action: PasswordActionTypes) => {
  return {
    password: {
      ...state.password,
      pass: action.payload
    }
  };
};

const storePasswordConfirmation= (state: PasswordState, action: PasswordActionTypes) => {
  return {
    password: {
      ...state.password,
      confirmation_pass: action.payload
    }
  };
};

const storeHint = (state: PasswordState, action: PasswordActionTypes) => {
  return {
    password: {
      ...state.password,
      hint: action.payload
    }
  };
};

const strategies = {
  [STORE_PASSWORD]: storePassword,
  [STORE_CONFIRMATION_PASSWORD]: storePasswordConfirmation,
  [STORE_HINT]: storeHint,
};

type TypeOfStrategies = typeof strategies;

const passwordReducer = createReducer <TypeOfStrategies, PasswordState>(
  strategies,
  initialState
);

export default passwordReducer;
