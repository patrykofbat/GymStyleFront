import React, {Component} from 'react';
import "./MyButton.css"
import {withRouter} from "react-router-dom"

class MyButton extends Component {



    handleButton = (event) => {
        event.preventDefault();
        console.log(this.props.onClick);
        this.props.onClick.push("/login");
    };


    render() {
        return (
            <button className="MyButton" onClick={this.handleButton}>
                {this.props.value}
            </button>
        );
    }
}

export default MyButton;
