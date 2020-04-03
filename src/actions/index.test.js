import { createPizza, actionTypes } from './';

describe('createPizza', () => {
    test('returns an action with type `CREATE_PIZZA`', () => {
        const action = createPizza();
        expect(action).toEqual({ type: actionTypes.CREATE_PIZZA });
    })
})