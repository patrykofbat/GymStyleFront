import React from 'react';
import { Route } from "react-router-dom";
import StartPage from "./components/pages/StartPage/StartPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegistrationPage from "./components/pages/RegistrationPage/RegistrationPage";


const App = () => (
    <div>
        <Route path="/home" exact component={StartPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/registration" exact component={RegistrationPage}/>
    </div>
);


export default App;
