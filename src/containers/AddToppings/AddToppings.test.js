import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';

import AddToppings from './AddToppings';

const setup = (state={}) => {
    const store = storeFactory(state);
    return shallow(<AddToppings store={store} />).dive();
}

describe('renders AddToppings component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-AddToppings');
        expect(component).toBe(1);
    });

    
})