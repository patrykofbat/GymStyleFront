import React, {Component} from 'react';
import { Route } from "react-router-dom";
import StartPage from "./utilis/components/pages/StartPage/StartPage";
import LoginPage from "./utilis/components/pages/LoginPage/LoginPage";
import RegistrationPage from "./utilis/components/pages/RegistrationPage/RegistrationPage";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {signUpUser} from "./utilis/actions/userActions";


class App extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <Route path="/home" exact render={(props) => <StartPage {...this.props} {...props}/>}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/registration" exact render={(props) => <RegistrationPage {...this.props} {...props}/>}/>
            </div>

        );
    };
}

const mapStateToProps = (state) => {
    return{
        user:state.user

    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        signUp: signUpUser

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


