import React, {Component} from 'react';
import LoginForm from "../components/forms/LoginForm";
import api from "../api";



class LoginPage extends Component {

    handleData = (data) => {
        api.user.signIn(data);
    };

    render() {
        return (
            <div className="login-container">
                <LoginForm onSubmit={this.handleData}/>
            </div>
        );
    }

}


export default LoginPage;
