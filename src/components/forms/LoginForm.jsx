import React, { Component } from 'react';
import "../../style/components/forms/LoginForm.css"
import { Link } from "react-router-dom";
import Logo from "../common/Logo";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            disabled: "disabled"


        };


    }
    style = {
        textDecoration: 'none',
        color: '#659ff8',
        fontSize: '1.1rem',
        marginLeft: '5px'
    };

    handleChange = (event) => {
        event.preventDefault();
        if (!this.state.data.hasOwnProperty("login") || !this.state.data.hasOwnProperty("password") || event.target.value === "") {
            this.setState({
                disabled: "disabled",
                data: { ...this.state.data, [event.target.name]: event.target.value }
            });
        }
        else {
            this.setState({
                disabled: "",
                data: { ...this.state.data, [event.target.name]: event.target.value }
            });
        }


    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.data);
    };



    render() {

        return (
            <div className="box-form">
                <Logo />
                <div className="form-container">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="inputs-container">
                            <label>Login:</label>
                            <input type="text" name="login" autoFocus="autoFocus" onChange={this.handleChange} />

                            <label>Hasło:</label>
                            <input type="password" name="password" onChange={this.handleChange} />

                            <input type="submit" value="Zaloguj" disabled={this.state.disabled} />
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <Link to="/registration" style={this.style}>Nie masz konta?</Link>
                </div>
            </div>
        );
    }
}

export default LoginForm;
