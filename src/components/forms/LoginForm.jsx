import React, {Component} from 'react';
import "./LoginForm.css"
import {Link} from "react-router-dom";

class LoginForm extends Component {
    style ={
        textDecoration: 'none',
        color: '#659ff8',
        fontSize: '1.1rem',
        marginLeft: '5px'
    };


    render() {
        return (
            <div className="box-form">
                <div className="header">
                    <h2>PLACEHOLDER</h2>
                </div>
                <form className="form">
                    <div className="login-form">
                        <label>Login:</label>
                        <input type="text" autoFocus="autoFocus" />
                        <label>Hasło:</label>
                        <input type="password" />
                        <input type="submit" value="Zaloguj"/>
                    </div>
                </form>
                <div className="footer">
                    <Link to="/registration" style={this.style}>Nie masz konta?</Link>
                </div>
            </div>
        );
    }
}

export default LoginForm;
