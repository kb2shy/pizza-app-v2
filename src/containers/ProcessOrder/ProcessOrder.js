import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateView, addCustomerInfo } from '../../actions';

class ProcessOrder extends Component {
    state = {
        customerName: '',
        address: {
            street: '',
            city: '',
            zipcode: ''
        },
        creditCard: {
            type: '',
            number: '',
            secCode: '',
            expDate: ''
        }
    }

    render(){
        return(
            <div data-test="component-ProcessOrder">
                <h3 data-test="header-ProcessOrder">Order Processing</h3>
                <form data-test="form-ProcessOrder">
                    <label data-test="label-customer-name" htmlFor="customer-name">Customer Name</label>
                    <input data-test="input-customer-name" type="text" />
                </form>
            </div>
        )
    }

}

export default connect(null, { addCustomerInfo, updateView })(ProcessOrder);