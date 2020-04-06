import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';

import AddToppings from './AddToppings';

const setup = (state={}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<AddToppings store={store} />).dive().dive();
    return wrapper;
}

describe('renders AddToppings component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test('renders without error', () => {
        const addToppingsComponent = findByTestAttr(wrapper, 'component-AddToppings');
        expect(addToppingsComponent.length).toBe(1);
    });

    describe('renders header', () => {
        test('h3 header included in AddToppings component', () => {
            const headerAddToppings = findByTestAttr(wrapper, 'header-AddToppings');
            expect(headerAddToppings.length).toBe(1);
        })

        test('heading contains `Add Toppings`', () => {
            const headerAddToppings = findByTestAttr(wrapper, 'header-AddToppings');
            expect(headerAddToppings.text()).toContain(`Add Toppings`);
        })
    })

    describe('renders form', () => {
        describe('render form', () => {
            test('renders label for cheese', () => {
                const labelCheese = findByTestAttr(wrapper, 'label-cheese');
                expect(labelCheese.length).toBe(1);
            });
    
            test('renders check boxes for cheese', () => {
                const inputCheese = findByTestAttr(wrapper, 'input-cheese');
                expect(inputCheese.length).toBe(1);
            });
    
            test('renders label for veggies', () => {
                const labelSize = findByTestAttr(wrapper, 'label-veggies');
                expect(labelSize.length).toBe(1);
            });
    
            test('renders check boxes for veggies', () => {
                const inputVeggies = findByTestAttr(wrapper, 'input-veggies');
                expect(inputVeggies.length).toBe(1);
            });
    
            test('renders label for meat', () => {
                const labelMeat = findByTestAttr(wrapper, 'label-meat');
                expect(labelMeat.length).toBe(1);
            });
    
            test('renders input for meat', () => {
                const inputMeat = findByTestAttr(wrapper, 'input-meat');
                expect(inputMeat.length).toBe(1);
            });
    
            test('renders button for adding another pizza', () => {
                const addPizzabutton = findByTestAttr(wrapper, 'add-pizza-button');
                expect(addPizzabutton.length).toBe(1);
            });

            test('renders button for place pizza order', () => {
                const placePizzaOrder = findByTestAttr(wrapper, 'place-order-button');
                expect(placePizzaOrder.length).toBe(1);
            });
        })
    })

})