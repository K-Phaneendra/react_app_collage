import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import audioToText from "./audioToText";

export default combineReducers({
  globalReducer,
  audioToText,
});
