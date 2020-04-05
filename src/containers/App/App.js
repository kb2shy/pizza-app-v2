import React, { Component } from 'react';

import AddToppings from '../AddToppings/AddToppings';
import CreatePizza from '../CreatePizza/CreatePizza';
import Home from '../Home/Home';

class App extends Component {
    render() {
        return(
            <div data-test="component-App" className="container">
                <h1 data-test="header-main">Chhaian's Foo-sian Pizza Shop</h1>
            </div>
        )
    }
}

export default App;