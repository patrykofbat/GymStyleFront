import React, {Component} from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {

    constructor(){
        super();
        this.state = {}
    }

    handleChange(event){
        if(event.target.name !== "rePassword") {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

    }

    handleSubmit(event){
        event.preventDefault();
        let url = "http://192.168.63.207:8080/user";
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => console.log(response.json()));
    }

    render() {
        return (
            <div className="registrationFormContainer">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="registrationForm">
                        <div className="row">
                            <label>Login</label>
                            <input className="input" name="name" placeholder="Podaj swoja nazwę" type="text" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="row">
                            <label>Hasło</label>
                            <input className="input" name="password" placeholder="Hasło" type="password" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="row">
                            <label>Powtórz hasło</label>
                            <input className="input" name="rePassword" placeholder="Powtórz hasło" type="password" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="row">
                            <label>Adres e-mail</label>
                            <input className="input" name="email" placeholder="Podaj swój adres e-mail" type="text" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <input id="submit" type="submit" value="Zarejestruj"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default RegistrationForm;
