import { CREATE_UPDATE_PIZZA } from '../constants/action-types';

/**
 * @function createPizzaReducer
 * @param {object} state - start of single pizza object
 * @param { object} action - action to be reduced
 * @returns {boolean} - new pizza state
 */
export default (state={}, action) => {
    switch(action.type) {
        case CREATE_UPDATE_PIZZA:
            return action.payload;
        default:
            return state;
    }
}