import React, { Component } from 'react';
import {Draggable} from "react-beautiful-dnd";
import InfoButton from "../../common/InfoButton";


class Card extends Component{

    applyStyle = (provided, snapshot) =>({
        backgroundColor: "white",
        border:"1px solid #ccc",
        padding:"0.2rem",
        height:"3.2rem",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius: "0.4rem",
        boxShadow: "1px 2px #F5F5F5",
        userSelect: "none",
        ...provided.draggableProps.style
    });

    render(){
        return(
            <Draggable draggableId={this.props.id} type="PERSON" index={this.props.index}>
                {(provided, snapshot) => (
                    <div style={{margin:"0.6rem"}}>
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={this.applyStyle(provided, snapshot)}>

                            <span style={{fontSize:"0.85em"}}>{this.props.content}</span>
                            <InfoButton title={this.props.content} link={this.props.link} onClick={this.props.popUp}/>

                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
        )
    }
}
export default Card;