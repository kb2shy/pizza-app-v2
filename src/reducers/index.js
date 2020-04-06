// import { UPDATE_VIEW, CREATE_UPDATE_PIZZA, ADD_CUSTOMER_INFO, ADD_PIZZA} from '../constants/action-types';
import { combineReducers } from 'redux';
import createPizza from './createPizzaReducer';
import updateView from './updateViewReducer';
import addPizza from './addPizzaReducer';

export default combineReducers({
    createPizza,
    updateView,
    addPizza,
})
