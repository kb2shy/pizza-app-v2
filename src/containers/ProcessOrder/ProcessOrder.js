import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateView, addCustomerInfo } from '../../actions';

class ProcessOrder extends Component {
  state = {
    customerName: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipcode: ''
    },
    creditCard: {
      type: '',
      number: '',
      secCode: '',
      expDate: ''
    }
  }

  onNameChange = (e) => {
    this.setState({ ...this.state, customerName: e.target.value })
  }

  onAddressChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState({ ...this.state, address: { ...this.state.address, ...change } })
  }

  onCreditcardChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState({ ...this.state, creditCard: { ...this.state.creditCard, ...change }})
  }

  render() {
    return (
      <div data-test="component-ProcessOrder">
        <h3 data-test="header-ProcessOrder">Order Processing</h3>
        <form data-test="form-ProcessOrder">
          <label data-test="label-customer-name" htmlFor="customer-name">Customer Name</label>
          <input
            data-test="input-customer-name"
            className="form-control m-1"
            type="text"
            name="customerName"
            value={this.state.customerName}
            onChange={(e) => this.onNameChange(e)}
            placeholder="first and last name"
          />
          <label data-test="label-delivery-address" htmlFor="delivery-address">Delivery Address</label>
          <input
            data-test="input-delivery-street"
            className="form-control m-1"
            type="text"
            name="street"
            value={this.state.address.street}
            onChange={(e) => this.onAddressChange(e)}
            placeholder="street"
          />
          <input
            data-test="input-delivery-city"
            className="form-control m-1"
            type="text"
            name="city"
            value={this.state.address.city}
            onChange={(e) => this.onAddressChange(e)}
            placeholder="city"
          />
          <input
            data-test="input-delivery-state"
            className="form-control m-1"
            type="text"
            name="state"
            value={this.state.address.state}
            onChange={(e) => this.onAddressChange(e)}
            placeholder="state"
          />
          <input
            data-test="input-delivery-zipcode"
            className="form-control m-1"
            type="text"
            name="zipcode"
            value={this.state.address.zipcode}
            onChange={(e) => this.onAddressChange(e)}
            placeholder="zip code"
          />
          <label data-test="label-creditcard">Credit Card</label>
          <select
            data-test="select-creditcard-type"
            className="form-control"
            name="type"
            value={this.state.creditCard.type}
            onChange={(e) => this.onCreditcardChange(e)}
          >
            <option value="mastercard">MasterCard</option>
            <option value="visa">Visa</option>
            <option value="discover">Discover</option>
            <option value="americanExpress">American Express</option>
          </select>
        </form>
      </div>
    )
  }

}

export default connect(null, { addCustomerInfo, updateView })(ProcessOrder);