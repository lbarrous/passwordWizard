import { combineReducers } from "redux";
import passwordReducer from "./storePasswordReducer";
import stepReducer from "./stepReducer";

const rootReducer = combineReducers({
  password: passwordReducer,
  step: stepReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
