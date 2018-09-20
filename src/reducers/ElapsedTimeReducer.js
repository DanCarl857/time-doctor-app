import { UPDATE_ELAPSED_TIME } from "../actions/running.action";

export default function(state = { elapsedTime: 0 }, action) {
    switch(action.type) {
        case UPDATE_ELAPSED_TIME: 
           state = Object.assign({}, {elapsedTime: action.payload});
           return state;
        default: 
            return state;
    }
}