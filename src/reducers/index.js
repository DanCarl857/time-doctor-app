import { combineReducers } from 'redux';
import RunningReducer from './RunningReducer';

export const rootReducer = combineReducers({
    runningState: RunningReducer
});