import { ADD_PIZZA } from '../constants/action-types';

export default (state=[], action) => {
    switch(action.type) {
        case ADD_PIZZA:
            return [...state, action.payload];
        default:
            return state;
    }
}