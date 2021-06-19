import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import audioToText from "./audioToText";
import faceRecognition from './faceRecognition';
import imageToSketch from './imageToSketch';

export default combineReducers({
  globalReducer,
  audioToText,
  faceRecognition,
  imageToSketch
});
