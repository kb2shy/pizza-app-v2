export const actionTypes = {
    UPDATE_VIEW: 'UPDATE_VIEW',
    CREATE_PIZZA: 'CREATE_PIZZA',
    MODIFY_PIZZA: 'MODIFY_PIZZA',
    PROCESS_ORDER: 'PROCESS_ORDER',
    GET_PIZZA_ORDERS: 'GET_PIZZA_ORDERS'
}

/**
 * @function createPizza
 * @returns {object} - Action object with type 'CREATE_PIZZA'
 */
export const createPizza = (state={}, action) => {
    switch(action.type) {
        case actionTypes.CREATE_PIZZA:
            return {...state, pizza: action.payload };
        default:
            return state;
    }
}