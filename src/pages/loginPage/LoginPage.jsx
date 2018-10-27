import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import api from "../../api";



class LoginPage extends Component {

    handleData = (data) => {
        api.user.signIn(data);
        this.props.history.push("/dashboard");
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
