import React, { Component } from 'react';

class InputPopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(e, this.state.value);
    };

    render() {
        return (
            <div className="BgInputPopUp">
                <div className="BoxInputPopUp">
                    <div>
                        <span>{this.props.text}</span>
                        <button onClick={this.props.closePopUp}>x</button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type='text'/>
                        <input type='submit' value="Utwórz"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default InputPopUp;