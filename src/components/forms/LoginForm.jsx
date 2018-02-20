import React, {Component} from 'react';
import "./LoginForm.css"
import {Link} from "react-router-dom";
import logo from "../images/gymStyleIcon.png"

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state={
            disabled:"disabled"
        };


    }
    style ={
        textDecoration: 'none',
        color: '#659ff8',
        fontSize: '1.1rem',
        marginLeft: '5px'
    };

    handleChange=(event)=>{
        event.preventDefault();
        if(!this.state.hasOwnProperty("login") || !this.state.hasOwnProperty("password") || event.target.value === ""){
            this.setState({
                disabled:"disabled",
                [event.target.name]: event.target.value
            });
        }
        else{
            this.setState({
                disabled:"",
                [event.target.name]: event.target.value
            });
        }


    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    };


    render() {
        return (
            <div className="box-form">
                <div className="header-box">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="form-container">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="login-form">
                            <label>Login:</label>
                            <input type="text" name="login" autoFocus="autoFocus" onChange={this.handleChange}/>
                            <label>Hasło:</label>
                            <input type="password" name="password" onChange={this.handleChange} />
                            <input type="submit" value="Zaloguj" disabled={this.state.disabled}/>
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
