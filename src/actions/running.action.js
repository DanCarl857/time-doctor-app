export const UPDATE_RUNNING_STATE = 'UPDATE_RUNNING_STATE';
export const UPDATE_ELAPSED_TIME = 'UPDATE_ELAPSED_TIME';
export const UPDATE_WORKED_TIME = 'UPDATE_WORKED_TIME';

export function updateRunningState(value) {
    return dispatch => {
        if (value) {
            dispatch({
                type: UPDATE_RUNNING_STATE,
                payload: false
            });
        } else {
            dispatch({
                type: UPDATE_RUNNING_STATE,
                payload: true
            });
        }
    }
}

export function updateElapsedTime(value) {
    return dispatch => {
        dispatch({
            type: UPDATE_ELAPSED_TIME,
            payload: Math.floor(value/60000).toFixed(0)
        });
    }
}

export function updateWorkedTime(value) {
    return dispatch => {
        dispatch({
            type: UPDATE_WORKED_TIME,
            payload: value
        })
    }
}