import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import speechToText from './speechToText'

export default combineReducers({
 simpleReducer,
 speechToText
});
