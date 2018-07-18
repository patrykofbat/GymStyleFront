import React, {Component} from 'react';
import RegistrationForm from "./RegistrationForm";
import api from "../../api";

class RegistrationPage extends Component {

    handleData = (data) => {
        console.log("debug");
        api.user.signUp(data);

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
