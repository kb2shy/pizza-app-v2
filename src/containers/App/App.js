import React, { Component } from 'react';
import { connect } from 'react-redux';

// import AddToppings from '../AddToppings/AddToppings';
import CreatePizza from '../CreatePizza/CreatePizza';
import Home from '../Home/Home';

class App extends Component {
    onViewChange = () => {
        switch(this.props.view){
            case "createPizza":
                return <CreatePizza />
            default:
                return <Home />
        }
    }

    render() {
        return(
            <div data-test="component-App" style={{ textAlign: "center"}}>
                <h1 data-test="header-main">Chhaian's Foo-sian Pizza Shop</h1>
                {this.onViewChange()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    view: state.view,
})

export default connect(mapStateToProps)(App);