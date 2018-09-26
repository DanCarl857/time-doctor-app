import { combineReducers } from 'redux';
import RunningReducer from './RunningReducer';
import ElapsedTimeReducer from './ElapsedTimeReducer';
import InitialTimeReducer from './InitialTimeReducer';
import WorkedTimeReducer from './WorkedTimeReducer';

export const rootReducer = combineReducers({
    start: InitialTimeReducer,
    runningState: RunningReducer,
    elapsedTime: ElapsedTimeReducer,
    workedTime: WorkedTimeReducer
});