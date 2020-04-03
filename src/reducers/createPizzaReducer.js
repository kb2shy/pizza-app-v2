import { actionTypes } from '../actions';

export default (state={}, action) => {
    switch(action.type) {
        case actionTypes.CREATE_PIZZA:
            return {...state, pizza: action.payload };
        default:
            return state;
    }
}