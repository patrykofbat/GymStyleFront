import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import InputPopUp from "../../../components/common/InputPopUp";


class TrainingSelection extends Component {

  state = {
    popUp: false,
    trainingOptions: this.props.trainingOptions,
    currentDropdownTraining: this.props.currentDropdownTraining
  };

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

    if (prevProps.currentDropdownTraining !== this.props.currentDropdownTraining) {
      this.setState({
        currentDropdownTraining: this.props.currentDropdownTraining
      })
    }
  }

  handleChangeDropdown = (event, data) => {
    if (data.value === "new") {
      this.setState({ popUp: true });
    }
    else if (data.value !== undefined) {
      this.props.saveCurrentDropdownTraining(data.value);
    }
  };

  closePopUp = () => {
    this.setState({
      popUp: false
    });
  };

  handleSubmit = (e, data) => {
    this.props.createTrainingOption({
      key: data,
      value: data,
      text: data
    });
  };

  customizeTraining = () => {
    this.props.customizeTraining(this.state.currentDropdownTraining, this.props.items);
  };



  render() {
    return (
      <div className={"TrainingSelectionContainer"}>
        <div className={"TrainingSelectionHeader"}>
          <div>
            <h2>Trening</h2>
            <button onClick={this.customizeTraining}>-></button>
          </div>
          <Dropdown
            placeholder="Select training"
            style={{ userSelect: "none" }}
            fluid
            selection
            options={this.state.trainingOptions}
            onChange={this.handleChangeDropdown}
            text={this.state.currentDropdownTraining}
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
              {this.props.items && this.props.items.map(item => (
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
