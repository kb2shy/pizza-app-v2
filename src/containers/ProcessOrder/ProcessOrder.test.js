import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';

import ProcessOrder from './ProcessOrder';

const setup = (state={}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<ProcessOrder store={store}/>).dive();
    return wrapper;
}

describe('Process Order component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test('renders without error', () => {
        const processOrderComponent = findByTestAttr(wrapper, 'component-ProcessOrder');
        expect(processOrderComponent.length).toBe(1);
    });

    describe('Process Order component has header', () => {
        test('renders header', () => {
            const headerProcessOrder = findByTestAttr(wrapper, 'header-ProcessOrder');
            expect(headerProcessOrder.length).toBe(1);
        });

        test('header contains `Order Processing`', () => {
            const headerProcessOrder = findByTestAttr(wrapper, 'header-ProcessOrder');
            expect(headerProcessOrder.text()).toContain('Order Processing');
        })
    });

    describe('renders form', () => {
        test('renders without error', () =>  {
            const form = findByTestAttr(wrapper, 'form-ProcessOrder')
            expect(form.length).toBe(1);
        })

        test('label for customer name exists', () => {
            const labelCustomerName = findByTestAttr(wrapper, 'label-customer-name');
            expect(labelCustomerName.length).toBe(1);
        })

        test('input for customer name exists', () => {
            const inputCustomerName = findByTestAttr(wrapper, 'input-customer-name');
            expect(inputCustomerName.length).toBe(1);
        })
        
        test('label for delivery address exists', () => {
            const labelDeliveryAddress = findByTestAttr(wrapper, 'label-delivery-address');
            expect(labelDeliveryAddress.length).toBe(1);
        })

        test('input for delivery street exists', () => {
            const inputDeliveryAddress = findByTestAttr(wrapper, 'input-delivery-street');
            expect(inputDeliveryAddress.length).toBe(1);
        })

        test('input for delivery city exists', () => {
            const inputDeliveryCity = findByTestAttr(wrapper, 'input-delivery-city');
            expect(inputDeliveryCity.length).toBe(1);
        })

        test('input for delivery state exists', () => {
            const inputDeliveryState = findByTestAttr(wrapper, 'input-delivery-state');
            expect(inputDeliveryState.length).toBe(1);
        })

        test('input for delivery zipcode exists', () => {
            const inputDeliveryZipcode = findByTestAttr(wrapper, 'input-delivery-zipcode');
            expect(inputDeliveryZipcode.length).toBe(1);
        })

        test('label for credit card type exists', () => {
            const labelCreditcard = findByTestAttr(wrapper, 'label-creditcard');
            expect(labelCreditcard.length).toBe(1);
        })

        test('selection for credit card type exists', () => {
            const selectionCreditCard = findByTestAttr(wrapper, 'selection-creditcard-type');
            expect(selectionCreditCard.length).toBe(1);
        })

        test('label for credit card number exists', () => {
            const labelCreditCardNo = findByTestAttr(wrapper, 'label-creditcard-no');
            expect(labelCreditCardNo.length).toBe(1);
        })

        test('input for credit card number exists', () => {
            const inputCreditCardNo = findByTestAttr(wrapper, 'input-creditcard-no');
            expect(inputCreditCardNo.length).toBe(1);
        })

        test('label for credit card security code exists', () => {
            const labelSecurityCode = findByTestAttr(wrapper, 'label-creditcard-seccode');
            expect(labelSecurityCode.length).toBe(1);
        })

        test('input for credit card security code exists', () => {
            const inputSecurityCode = findByTestAttr(wrapper, 'input-creditcard-seccode');
            expect(inputSecurityCode.length).toBe(1);
        })

        test('label for credit card expiration date exists', () => {
            const labelExpirationDate = findByTestAttr(wrapper, 'label-creditcard-expdate');
            expect(labelExpirationDate.length).toBe(1);
        })

        test('input for credit card expiration date exists', () => {
            const inputExpirationDate = findByTestAttr(wrapper, 'input-creditcard-expdate');
            expect(inputExpirationDate.length).toBe(1);
        })

        test('Process Order button exists', () => {
            const processOrderButton = findByTestAttr(wrapper, 'button-ProcessOrder');
            expect(processOrderButton.length).toBe(1);
        })
    });
})