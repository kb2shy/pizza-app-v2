import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUpdatePizza, updateView } from '../../actions';

const crustOptions = [
    { key: "hand-tossed", text: "hand-tossed", value: "hand-tossed" },
    { key: "thin-crust", text: "thin-crust", value: "thin-crust" },
    { key: "deep-dish", text: "deep-dish", value: "deep-dish" },
]

const sizeOptions = [
    { key: "6", text: "6\"", value: "6" },
    { key: "9", text: "9\"", value: "9" },
    { key: "15", text: "15\"", value: "15" },
    { key: "22", text: "22\"", value: "22" }
]

const sauceOptions = [
    { key: "marinara", text: "marinara", value: "marinara" },
    { key: "spicy-tomato", text: "spicy-tomato", value: "spicy-tomato" },
    { key: "alfredo", text: "alfredo", value: "alfredo" },
    { key: "bbq", text: "bbq", value: "bbq" }
]

class CreatePizza extends Component {

    state = {
        crust: crustOptions[0].value,
        size: sizeOptions[0].value,
        sauce: sauceOptions[0].value,
        sauceLevel: 3
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const pizza = this.state;
        console.log(pizza);
        this.props.createUpdatePizza(pizza);
        return this.props.updateView("toppings");
    }

    render() {
        return (
            <div data-test="component-CreatePizza" style={{ textAlign: "center"}}>
                <h3 data-test="header-CreatePizza">Create Pizza</h3>
                <div className="form-group" style={{ textAlign: "center", width: "50vw", margin: "auto"}}>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label htmlFor="crustOptions">Crust Type</label>
                        <select 
                            className="form-control" 
                            id="crustOptions"
                            value={this.state.crust} 
                            onChange={(e) => this.setState({ crust: e.target.value})}
                        >
                            {crustOptions.map((crust) => <option key={crust.key} value={crust.value}>{crust.text}</option>)}
                        </select>
                        <label htmlFor="sizeOptions">Size</label>
                        <select 
                            className="form-control" 
                            id="sizeOptions"
                            value={this.state.size}
                            onChange={(e) => this.setState({ size: e.target.value})}
                        >
                            {sizeOptions.map((size) => <option key={size.key} value={size.value}>{size.text}</option>)}
                        </select>
                        <label htmlFor="sauceOptions">Sauce</label>
                        <select 
                            className="form-control" 
                            id="sauceOptions"
                            value={this.state.size}
                            onChange={(e) => this.setState({ sauce: e.target.value})}
                        >
                            {sauceOptions.map((sauce) => <option key={sauce.key} value={sauce.value}>{sauce.text}</option>)}
                        </select>
                        <label htmlFor="sauce-level">Sauce Level</label>
                        <br />
                        <input 
                            type="range" 
                            min="1" 
                            max="5"
                            value={this.state.sauceLevel}
                            onChange={(e) => this.setState({ sauceLevel: e.target.value})}
                        ></input>
                        <br />
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >Create Pizza</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { createUpdatePizza, updateView })(CreatePizza);