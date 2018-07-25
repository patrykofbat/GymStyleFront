import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import InputPopUp from "../../../components/common/InputPopUp";
import _ from "lodash";


class TrainingSelection extends Component {

  state = {
    popUp: false,
    trainingOptions: this.props.trainingOptions
  }

  applyStyle = snapshot => ({
    boxSizing: "border-box",
    marginTop: "10px",
    minHeight: "30vh",
    overflowY: "auto",
    overflowX: "hidden"
  });

  componentDidUpdate(prevProps) {
    if (prevProps.trainingOptions !== this.props.trainingOptions) {
      this.setState({
        popUp: false,
        trainingOptions: this.props.trainingOptions
      })
    }
  }

  addTraining = (event, data) => {
    if (data.value === "new") {
      this.setState({ popUp: true });
    }
  }
  closePopUp = () => {
    this.setState({
      popUp: false
    });
  }

  handleSubmit = (e, data) => {
    this.props.createTrainingOption({
      key: data,
      value: data,
      text: data
    });
  }



  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <h2 style={{ userSelect: "none" }}>Trening</h2>
            <button>-></button>
          </div>
          <Dropdown
            placeholder="Select training"
            style={{ userSelect: "none" }}
            fluid
            selection
            options={this.state.trainingOptions}
            onChange={this.addTraining}
            text={_.last(this.state.trainingOptions).text}
          />
        </div>
        {this.state.popUp && <InputPopUp onSubmit={this.handleSubmit} text={"Nazwa treningu: "} closePopUp={this.closePopUp} />}

        <Droppable style={{ flex: 1 }} droppableId="training">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={this.applyStyle(snapshot)}
            >
              {this.props.items.map(item => (
                <Card
                  link={item.link}
                  popUp={this.props.popUp}
                  id={item.id}
                  index={item.index}
                  content={item.content}
                  key={item.id}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default TrainingSelection;
