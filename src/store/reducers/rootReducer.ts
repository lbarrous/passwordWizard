import { combineReducers } from "redux";
import passwordReducer from "./storePasswordReducer";

const rootReducer = combineReducers({
  password: passwordReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
