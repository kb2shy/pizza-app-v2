import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';

import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @param {any} state - initial state for set up
 * @returns {ShallowWrapper}
 */
const setup = (state={}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<App store={store} />).dive().dive();
    return wrapper;
}

describe('renders App component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })
    test('renders without error', () => {
        const appComponent = findByTestAttr(wrapper, 'component-App');
        expect(appComponent.length).toBe(1);
    });
    
    test('renders header', () => {
        const header = findByTestAttr(wrapper, 'header-main');
        expect(header.length).toBe(1);
    });

    test('header contains `Chhaian\'s Foo-sian Pizza Shop`', () => {
        const header = findByTestAttr(wrapper, 'header-main');
        expect(header.text()).toContain(`Chhaian\'s Foo-sian Pizza Shop`);
    })
})



