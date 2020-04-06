import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPizza, createUpdatePizza, updateView } from '../../actions';

const meat = [
  { label: "pepperoni", value: "pepperoni" },
  { label: "sausage", value: "sausage" },
  { label: "canadian ham", value: "canadian ham" },
  { label: "beef", value: "beef" },
  { label: "anchovies", value: "anchovies" },
]

const veggies = [
  { label: "red bell peppers", value: "red bell peppers" },
  { label: "green bell peppers", value: "green bell peppers" },
  { label: "onions", value: "onions" },
  { label: "black olives", value: "black olives" },
  { label: "artichokes", value: "artichokes" },
];

const cheeses = [
  { label: "mozzarella", value: "mozzarella" },
  { label: "goat", value: "goat" },
  { label: "feta", value: "feta" },
  { label: "gorgonzola", value: "gorgonzola" },
  { label: "smoked gouda", value: "smoked gouda" },
]

class AddToppings extends Component {

  state = {
    selections: []
  }

  onSelectionChange = (topping) => {
    let newSelections;
    if (!this.state.selections.includes(topping)) {
      newSelections = [...this.state.selections, topping];
    } else {
      newSelections = this.state.selections.filter(selection => selection !== topping);
    }
    this.setState(newSelections);
  }

  updatePizza = () => {
    const newPizza = { ...this.props.pizza, ...this.state.selections };
    this.props.createUpdatePizza(newPizza);
    return this.props.updateView("order")
  }

  render() {
    return (
      <div data-test="component-AddToppings">
        <h3>Add Toppings</h3>
        <div>
          <form className="form-check">
            <label>Cheeses</label><br />
            {cheeses.map((cheese, index) => {
              return (<span className="form-check">
                <input key={index} type="checkbox" value={cheese.value} id={cheese.label} name={cheese.label} />
                <label htmlFor={cheese.label}>{cheese.label}</label><br />
              </span>
              )
            })}
          </form>
        </div>

      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  pizza: state.pizza
})

export default connect(mapStateToProps, { addPizza, createUpdatePizza, updateView })(AddToppings)