import React, { Component } from "react";
import { Route } from "react-router-dom";
import StartPage from "./pages/startPage/StartPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import Dashboard from "./pages/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          path="/home"
          exact
          render={props => <StartPage {...this.props} {...props} />}
        />
        <Route
          path="/login"
          exact
          render={props => <LoginPage {...this.props} {...props} />}
        />
        <Route
          path="/registration"
          exact
          render={props => <RegistrationPage {...this.props} {...props} />}
        />
        <Route
          path="/dashboard"
          exact
          render={props => <Dashboard {...this.props} {...props} />}
        />
      </div>
    );
  }
}

export default App;
