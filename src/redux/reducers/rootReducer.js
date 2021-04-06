import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import audioToText from "./audioToText";
import faceRecognition from './faceRecognition';

export default combineReducers({
  globalReducer,
  audioToText,
  faceRecognition
});
