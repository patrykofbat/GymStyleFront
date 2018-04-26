import React, { Component } from 'react';
import {Draggable} from "react-beautiful-dnd";


class Card extends Component{

    render(){
        return(
            <Draggable draggableId={this.props.id} type="PERSON" index={this.props.index}>
                {(provided, snapshot) => (
                    <div>
                        <div
                            ref={provided.innerRef}
                            style={{backgroundColor: "red"}}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <h4>{this.props.content}</h4>
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
        )
    }
}
export default Card;