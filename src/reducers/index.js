import { UPDATE_VIEW, CREATE_UPDATE_PIZZA } from '../constants/action-types';

const initialState = {
    customer: {},
    pizza: {},
    pizzas: [],
    view: 'home'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_VIEW:
            return {...state, view: action.payload };
        case CREATE_UPDATE_PIZZA: 
            return {...state, pizza: action.payload };
        default:
            return state;
    }
}