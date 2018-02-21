import React, {Component} from 'react';
import './RegistrationForm.css';
import Logo from "../common/Logo";
import InlineError from "../messages/InlineError";
import validator from "validator";

class RegistrationForm extends Component {

    constructor(){
        super();
        this.state = {
            data: {},
            errors: {}
        }
    }

    handleChange = (event) =>{
        event.preventDefault();
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        });


    };

    handleSubmit = (event) =>{
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState( {errors} );
        console.log(errors);
        if(Object.keys(errors).length === 0) {
            let url = "http://192.168.63.211:8080/user";
            fetch(url,{
                method: 'POST',
                body: JSON.stringify({
                    login:this.state.data.login,
                    password:this.state.data.password,
                    email:this.state.data.email
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(response => console.log(response.json()));

            return errors;
        }
        else {
            return errors;

        }
    };

    validate = (data)=>{
        const errors = {};
        if(!data.login)
            errors.login = "To pole nie może być puste";
        if(!data.password)
            errors.password = "To pole nie może być puste";
        if(data.password !== data.rePassword)
            errors.rePassword = "Hasła nie są identyczne";
        if(!data.email)
            errors.email = "Pole nie moze byc puste";
        else {
            if (!validator.isEmail(data.email))
                errors.email = "Nie poprawny mail";
        }
        return errors;

    };

    render() {
        const { errors } = this.state;

        return (
            <div className="box-form">
                <Logo/>
                <div className="form-container">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="inputs-container">
                            <label>Login:</label>
                            <input className="input" name="login" placeholder="Podaj swoja nazwę" type="text" onChange={this.handleChange}/>
                            {errors.login && <InlineError text={errors.login}/>}

                            <label>Hasło:</label>
                            <input className="input" name="password" placeholder="Hasło" type="password" onChange={this.handleChange}/>
                            {errors.password && <InlineError text={errors.password}/>}

                            <label>Powtórz hasło:</label>
                            <input className="input" name="rePassword" placeholder="Powtórz hasło" type="password" onChange={this.handleChange}/>
                            {errors.rePassword && <InlineError text={errors.rePassword}/>}

                            <label>Adres e-mail:</label>
                            <input className="input" name="email" placeholder="Podaj swój adres e-mail" type="text" onChange={this.handleChange}/>
                            {errors.email && <InlineError text={errors.email}/>}

                            <input id="submit" type="submit" value="Zarejestruj"/>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default RegistrationForm;
