import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import audioToText from './audioToText'

export default combineReducers({
 simpleReducer,
 audioToText
});
