export const UPDATE_RUNNING_STATE = 'UPDATE_RUNNING_STATE';

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