import React, {Component} from 'react';
import RegistrationForm from "../../forms/RegistrationForm";
import "./RegistrationPage.css"

class RegistrationPage extends Component {

    handleData = (data) => {
        console.log("debug");
        this.props.signUp(data)();
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
