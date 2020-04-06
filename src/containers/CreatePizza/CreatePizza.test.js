import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';

import CreatePizza from './CreatePizza';

const setup = (state={}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<CreatePizza store={store} />).dive();
    return wrapper;
}

describe('renders CreatePizza component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test('renders without error', () => {
        const createPizzaComponent = findByTestAttr(wrapper, 'component-CreatePizza');
        expect(createPizzaComponent.length).toBe(1);
    })

    describe('render form', () => {
        test('renders label for crust', () => {
            const labelCrust = findByTestAttr(wrapper, 'label-crust');
            expect(labelCrust.length).toBe(1);
        });

        test('renders input for crust', () => {
            const inputCrust = findByTestAttr(wrapper, 'input-crust');
            expect(inputCrust.length).toBe(1);
        });

        test('renders label for size', () => {
            const labelSize = findByTestAttr(wrapper, 'label-size');
            expect(labelSize.length).toBe(1);
        });

        test('renders input for size', () => {
            const inputSize = findByTestAttr(wrapper, 'input-size');
            expect(inputSize.length).toBe(1);
        });

        test('renders label for sauce', () => {
            const labelSauce = findByTestAttr(wrapper, 'label-sauce');
            expect(labelSauce.length).toBe(1);
        });

        test('renders input for sauce', () => {
            const inputSauce = findByTestAttr(wrapper, 'input-sauce');
            expect(inputSauce.length).toBe(1);
        });

        test('renders label for sauce-level', () => {
            const labelSauceLevel = findByTestAttr(wrapper, 'label-sauce-level');
            expect(labelSauceLevel.length).toBe(1);
        });

        test('renders input for sauce-level', () => {
            const inputSauceLevel = findByTestAttr(wrapper, 'input-sauce-level');
            expect(inputSauceLevel.length).toBe(1);
        });

        test('renders button for submitting pizza', () => {
            const button = findByTestAttr(wrapper, 'create-pizza-button');
            expect(button.length).toBe(1);
        })
    })
})