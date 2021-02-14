import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import stepReducer from "./stepReducer";
import passwordReducer from "./storePasswordReducer";

const rootReducer = combineReducers({
  password: passwordReducer,
  step: stepReducer,
  loading: loadingReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
