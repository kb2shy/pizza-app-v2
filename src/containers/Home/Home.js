import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateView } from '../../actions/';

class Home extends Component {

    render(){
        const { updateView } = this.props;
        return(
            <div data-test="component-Home" style={{ textAlign: "center"}}>
                <h3 data-test="header-Home">Press START to create pizza</h3>
                <img src="pizza.jpg" style={{ margin: 0, padding: 0, height: "50vh" }} alt="pizza" ></img>
                <br />
                <button
                    data-test="button-Start" 
                    className="btn btn-lrg btn-success"
                    onClick={() => updateView("createPizza")}
                >START
                </button>
            </div>
        )
    }
}

export default connect(null, { updateView })(Home);