import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @param {any} state - initial state for set up
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state={}) => {
    return shallow(<App {...props} />);
}

test('renders App without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-App');
    expect(appComponent.length).toBe(1);
});

test('renders header `Chhaian\'s Foo-sian Pizza Shop`', () => {
    const wrapper = setup();
    const header = findByTestAttr(wrapper, 'header-main');
    expect(header.length).toBe(1);
});


