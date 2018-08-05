import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import InfoButton from "../../../components/common/InfoButton";

class Card extends Component {
  applyStyle = (provided, snapshot) => ({
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "0.2rem",
    height: "3.2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "0.4rem",
    boxShadow: "1px 2px #F5F5F5",
    userSelect: "none",
    ...provided.draggableProps.style
  });

  render() {
    let { id, index, content, link, popUp, series, reps, tempo } = { ...this.props };
    return (
      <Draggable
        draggableId={id}
        type="PERSON"
        index={index}
      >
        {(provided, snapshot) => (
          <div style={{ margin: "0.6rem" }}>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={this.applyStyle(provided, snapshot)}
            >
              <span style={{ fontSize: "0.85em" }}>{(index + 1) + ". " + content}</span>
              {series && <input style={{ width: "5%" }} type="text" placeholder={series} />}
              {reps && <input style={{ width: "5%" }} type="text" placeholder={reps} />}
              {tempo && <input style={{ width: "8%" }} type="text" placeholder={tempo} />}
              <InfoButton
                title={content}
                link={link}
                onClick={popUp}
              />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}
export default Card;
