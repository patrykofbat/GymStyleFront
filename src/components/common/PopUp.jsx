import React, { Component } from "react";

class PopUp extends Component {
  style = {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F7F7F7",
    boxSizing: "border-box",
    width: "70%",
    height: "69%",
    marginLeft: "1.5%",
    marginTop: "1.5%",
    borderRadius: "0.4rem",
    border: "1px solid #d4d4d5"
  };

  render() {
    return (
      <div style={this.style}>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            margin: "0.5rem"
          }}
        >
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
