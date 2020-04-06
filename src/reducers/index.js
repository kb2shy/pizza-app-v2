// import { UPDATE_VIEW, CREATE_UPDATE_PIZZA, ADD_CUSTOMER_INFO, ADD_PIZZA} from '../constants/action-types';
import { combineReducers } from 'redux';
import createPizza from './createPizzaReducer';
import updateView from './updateViewReducer';

// const initialState = {
//     customer: {},
//     pizza: {},
//     pizzas: [],
//     view: 'home'
// }

export default combineReducers({
    createPizza,
    updateView
})
// export default (state = initialState, action) => {
//     switch(action.type) {
//         case UPDATE_VIEW:
//             return {...state, view: action.payload };
//         case CREATE_UPDATE_PIZZA: 
//             return {...state, pizza: action.payload };
//         default:
//             return state;
//     }
// }