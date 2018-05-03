import React, { Component } from 'react';
import {Draggable} from "react-beautiful-dnd";


class Card extends Component{

    applyStyle = (provided, snapshot) =>({
        backgroundColor: "red",
        height:"2rem",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        ...provided.draggableProps.style
    });

    render(){
        return(
            <Draggable draggableId={this.props.id} type="PERSON" index={this.props.index}>
                {(provided, snapshot) => (
                    <div>
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={this.applyStyle(provided, snapshot)}
                        >
                            <h4>{this.props.content}</h4>
                            <button onClick={this.props.popUp}>X</button>
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
        )
    }
}
export default Card;