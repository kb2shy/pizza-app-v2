import { actionTypes } from '../actions';

/**
 * @function createPizzaReducer
 * @param {object} state - start of single pizza object
 * @param { object} action - action to be reduced
 * @returns {boolean} - new pizza state
 */
export default (state={}, action) => {
    switch(action.type) {
        case actionTypes.CREATE_PIZZA:
            return {...state, pizza: action.payload };
        default:
            return state;
    }
}