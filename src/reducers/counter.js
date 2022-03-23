import { INCREASE_COUNTER } from "../actionTypes";

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return ++state;
        
        default:
            return state;
    }
}

export default counterReducer;