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
    this.setState({ selections: newSelections });
  }

  addAnotherPizza = (e) => {
    e.preventDefault();
    const newPizza = {...this.props.pizza, toppings: this.state.selections };
    this.props.addPizza(newPizza);
    this.props.createUpdatePizza({});
    return this.props.updateView("createPizza");
  }

  processOrder = (e) => {
    e.preventDefault();
    const newPizza = { ...this.props.pizza, toppings: this.state.selections };
    this.props.addPizza(newPizza);
    this.props.createUpdatePizza({});
    return this.props.updateView("order");
  }

  render() {
    return (
      <div data-test="component-AddToppings">
        <h3>Add Toppings</h3>
        <div>
          <form className="form-check">
            <div className="card-group">
              <div className="card mx-1" >
                <div className="card-header">Cheeses</div>
                <div className="card-body">
                  {cheeses.map((cheese, index) => {
                    return (<span key={index} className="form-check">
                      <input 
                        type="checkbox" 
                        value={cheese.value}
                        onChange={(e) => this.onSelectionChange(e.target.value)} 
                        id={cheese.label} 
                        name={cheese.label} 
                      />
                      <label htmlFor={cheese.label} style={{marginLeft: 5}}>{cheese.label}</label><br />
                    </span>
                    )
                  })}
                </div>
              </div>
              <div className="card mx-1" >
                <div className="card-header">Veggies</div>
                <div className="card-body">
                  {/* <label>Cheeses</label><br /> */}
                  {veggies.map((veggie, index) => {
                    return (<span key={index} className="form-check">
                      <input 
                        type="checkbox" 
                        value={veggie.value} 
                        onChange={(e) => this.onSelectionChange(e.target.value)}
                        id={veggie.label} 
                        name={veggie.label} />
                      <label htmlFor={veggie.label} style={{marginLeft: 5}}>{veggie.label}</label><br />
                    </span>
                    )
                  })}
                </div>
              </div>
              <div className="card mx-1">
                <div className="card-header">Meat</div>
                <div className="card-body">
                  {/* <label>Cheeses</label><br /> */}
                  {meat.map((m, index) => {
                    return (<span key={index} className="form-check">
                      <input 
                        type="checkbox" 
                        value={m.value} 
                        onChange={(e) => this.onSelectionChange(e.target.value)}
                        id={m.label} 
                        name={m.label} />
                      <label htmlFor={m.label} style={{marginLeft: 5}}>{m.label}</label><br />
                    </span>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button 
                className="btn btn-warning"
                onClick={(e) => this.addAnotherPizza(e)}
              >Create Another Pizza
              </button>
              <button 
                className="btn btn-primary"
                onClick={(e) => this.processOrder(e)}
              >Make My Pizzas
              </button>
            </div>
          </form>
        </div>

      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  pizza: state.createPizza
})

export default connect(mapStateToProps, { addPizza, createUpdatePizza, updateView })(AddToppings)