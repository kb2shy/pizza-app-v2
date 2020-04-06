import { UPDATE_VIEW } from '../constants/action-types';

export default (state='home', action) => {
    switch (action.type) {
        case UPDATE_VIEW:
            return action.payload;
        default:
            return state;
    }
}