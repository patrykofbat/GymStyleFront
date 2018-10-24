import React, { Component } from "react";
import RegistrationForm from "./RegistrationForm";
import api from "../../api";
import MessageApiPopUp from "../../components/messages/MessageApiPopUp";
import Spinner from "../../components/common/Spinner";

class RegistrationPage extends Component {
  state = {
    popUp: false,
    isLoading: false,
    message: ""
  };

  handleData = data => {
    console.log("debug");
    api.user.signUp(data).then(response =>{
      this.setState({
          isLoading: false,
          message: response.data.message
      })
    });


    this.setState({
        popUp: true,
        isLoading:true
    });
  };

  closePopUp = ()=>{
    this.setState({popUp: false})
  };

  render() {
    const {popUp, isLoading, message} = this.state;
    return (
      <div className="registration-container">
        <RegistrationForm onSubmit={this.handleData} />
          {popUp && <MessageApiPopUp  closePopUp={this.closePopUp}>
              {isLoading && <Spinner/>}
              {!isLoading && <h2>{message}</h2>}
          </MessageApiPopUp>}
      </div>
    );
  }
}

export default RegistrationPage;
