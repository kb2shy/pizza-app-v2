import { 
    UPDATE_VIEW, 
    CREATE_UPDATE_PIZZA, 
    ADD_PIZZA, 
    ADD_CUSTOMER_INFO 
} from '../constants/action-types';

/**
 * Action creator that creates and modifies pizza object in Redux Store
 * @function createPizza
 * @returns {object} - Action object with type 'CREATE_UPDATE_PIZZA'
 */
export const createUpdatePizza = (pizza) => {
    return {
        type: CREATE_UPDATE_PIZZA,
        payload: pizza
    }
}

/**
 * Update view action creator in Redux Store
 * @function updateView
 * @param {string} view
 * @returns {object} 
 */
export const updateView = (view) => {
    return {
        type: UPDATE_VIEW,
        payload: view
    }
}

/**
 * Action creator that moves pizza in redux store to pizzas array
 * @function addPizza
 * @returns {object}
 */
export const addPizza = (pizza) => {
    return {
        type: ADD_PIZZA,
        payload: pizza
    }
}

/**
 * Action creator that stores customer info in Redux store
 * @function customerInfo
 * @param {object} customer
 * @returns {object} 
 */

export const addCustomerInfo = (customer) => {
    return {
        type: ADD_CUSTOMER_INFO,
        payload: customer
    }
}