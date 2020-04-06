import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';

import UnconnectedHome from './Home';

/**
 * Factory function to create a ShallowWrapper for the Home Component
 * @function setup
 * @param {object} props 
 * @param {any} state 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    return shallow(<UnconnectedHome {...props} />);
}

describe('renders Home component', () => {
    let wrapper;
    beforeEach(() => {
        return wrapper = setup();
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-Home');
        expect(component.length).toBe(1);
    });

    describe('renders header', () => {
        test('renders without error', () => {
            const header = findByTestAttr(wrapper, 'header-Home');
            expect(header.length).toBe(1);
        });
    
        test('header contains "Press START to create pizza"', () => {
            const header = findByTestAttr(wrapper, 'header-Home');
            expect(header.text()).toContain("Press START to create pizza");
        })
    })

    describe('renders button', () => {
        test('renders without error', () => {
            const button = findByTestAttr(wrapper, 'button-Start');
            expect(button.length).toBe(1);
        });

        test('button is clickable', () => {
            const button = findByTestAttr(wrapper, "button-Start");
            button.simulate('click');
        })
    })
})