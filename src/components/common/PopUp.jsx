import React, { Component } from "react";

class PopUp extends Component {

  render() {
    return (
      <div className="PopUpBg">
        <div>
          <button onClick={this.props.esc}>x</button>
          <p style={{ fontSize: "1.5em" }}>{this.props.title}</p>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <iframe
            title={this.props.title}
            src={this.props.link}
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default PopUp;
