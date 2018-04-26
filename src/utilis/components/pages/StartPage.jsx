import React from 'react';
import Header from "../common/Header";
import "../../style/components/pages/StartPage.css";
import MyButton from "../common/MyButton";


const Start = (props) =>(
    <div className="StartContainer">
        <Header>
            <h2>Gym Style</h2>
            <div className="HeaderButtons">
                <MyButton onClick={props.history} value="Zaloguj się"/>
            </div>
        </Header>
    </div>
);


export default Start;
