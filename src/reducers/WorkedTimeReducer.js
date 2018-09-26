import { UPDATE_WORKED_TIME } from "../actions/running.action";

export default function(state = { minutes: 0 }, action) {
    switch(action.type) {
        case UPDATE_WORKED_TIME: 
            state = Object.assign({}, {minutes: action.payload});
            return state;
        default: 
            return state;
    }
}