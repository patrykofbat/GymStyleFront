import React, {Component} from 'react';
import RegistrationForm from "../../forms/RegistrationForm";
import "./RegistrationPage.css"

class RegistrationPage extends Component {

    render() {
        return (
            <div className="registration-container">
                <RegistrationForm/>
            </div>
        );
    }
}

export default RegistrationPage;
