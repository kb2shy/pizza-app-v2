import { actionTypes } from '../actions';
import createPizzaReducer from './createPizzaReducer';

test('returns default state of {} when no action is passed', () => {
    const newState = createPizzaReducer(undefined, {});
    expect(newState).toEqual({});
});

test('returns a pizza object when actionType of `CREATE_PIZZA` is passed', () => {
    const newState = createPizzaReducer(undefined, actionTypes.CREATE_PIZZA);
    expect(newState).toEqual({});
})