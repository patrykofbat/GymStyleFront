import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";

class TrainingSelection extends Component {
  trainingOptions = [
    { key: "nogi1", value: "nogi", text: "nogi" },
    { key: "klata1", value: "klata", text: "klata" },
    { key: "plecy1", value: "plecy", text: "plecy" },
    { key: "new", value: "new", text: "Utwórz nowy plan" }
  ];

  applyStyle = snapshot => ({
    boxSizing: "border-box",
    marginTop: "10px",
    minHeight: "30vh",
    overflowY: "auto",
    overflowX: "hidden"
  });

  addTraining = (event, data)=>{
    if(data.value === "new"){
      // add new item
    }
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h2 style={{ userSelect: "none" }}>Trening</h2>
          <Dropdown
            placeholder="Select training"
            style={{ userSelect: "none" }}
            fluid
            selection
            options={this.trainingOptions}
            value={"nogi"}
            onChange={this.addTraining}
          />
        </div>

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
