import { PasswordActionTypes } from "../actions/Password";

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
  console.log(state);
  console.log(action);
};

/* Used to refactor reducer using Strategy pattern: https://en.wikipedia.org/wiki/Strategy_pattern */
const strategies = {
  STORE_PASSWORD: storePassword,
  /* More transformers */
  __default__: (state: PasswordState) => state
};

const passwordReducer = (
  state: PasswordState = initialState,
  action: PasswordActionTypes
) => {
  const transformer = strategies[action.type] || strategies.__default__;
  return transformer(state, action);
};

export default passwordReducer;
