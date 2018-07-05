import React, { Component } from "react";
import { Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          path="/home"
          exact
          render={props => <StartPage {...this.props} {...props} />}
        />
        <Route path="/login" exact component={LoginPage} />
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
