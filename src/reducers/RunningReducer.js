import { UPDATE_RUNNING_STATE } from "../actions/running.action";

export default function(state = { running: false }, action) {
    switch(action.type) {
        case UPDATE_RUNNING_STATE: 
           state = Object.assign({}, {running: action.payload});
           return state;
        default: 
            return state;
    }
}