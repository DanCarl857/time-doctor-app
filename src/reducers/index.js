import { combineReducers } from 'redux';
import RunningReducer from './RunningReducer';
import ElapsedTimeReducer from './ElapsedTimeReducer';

export const rootReducer = combineReducers({
    runningState: RunningReducer,
    elapsedTime: ElapsedTimeReducer
});