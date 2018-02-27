import React, {Component} from 'react';
import RegistrationForm from "../../forms/RegistrationForm";
import "./RegistrationPage.css"

class RegistrationPage extends Component {

    handleData = (data) => {
        let url = "http://192.168.63.211:8080/user";
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
            <div className="registration-container">
                <RegistrationForm onSubmit={this.handleData}/>
            </div>
        );
    }
}

export default RegistrationPage;
