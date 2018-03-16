import React, {Component} from 'react';
import "../../style/components/pages/LoginPage.css"
import LoginForm from "../../forms/LoginForm";



class LoginPage extends Component {

    handleData = (data) => {
        let url = "http://192.168.63.211:8080/login";
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => console.log(response.json()));
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
