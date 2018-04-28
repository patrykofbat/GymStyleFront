import React, {Component} from 'react';
import { Route } from "react-router-dom";
import StartPage from "./utilis/components/pages/StartPage";
import LoginPage from "./utilis/components/pages/LoginPage";
import RegistrationPage from "./utilis/components/pages/RegistrationPage";
import Dashboard from "./utilis/components/pages/Dashboard";


class App extends Component {

    render() {
        return (
            <div>
                <Route path="/home" exact render={(props) => <StartPage {...this.props} {...props}/>}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/registration" exact render={(props) => <RegistrationPage {...this.props} {...props}/>}/>
                <Route path="/dashboard" exact render={(props) => <Dashboard {...this.props} {...props}/>}/>
            </div>

        );
    };
}


export default App;


