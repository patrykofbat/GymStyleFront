import React, {Component} from 'react';
import RegistrationForm from "../../forms/RegistrationForm";
import Container from "../../common/Container";

class RegistrationPage extends Component {

    render() {
        return (
            <Container>
                <div className="registrationContainer">
                    <RegistrationForm/>
                </div>
            </Container>
        );
    }
}

export default RegistrationPage;
