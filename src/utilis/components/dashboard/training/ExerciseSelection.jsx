import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";
import {Droppable} from "react-beautiful-dnd";
import Card from "./Card";

class ExerciseSelection extends Component {

    exerciseOptions = [
        { key: 'nogi', value: 'nogi', text: 'nogi' },
        { key: 'klata', value: 'klata', text: 'klata' },
        { key: 'plecy', value: 'plecy', text: 'plecy' },

    ];

    handleChange = (e, data)=>{
        console.log(data);

    };

    applyStyle = (snapshot) =>({
        backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
        height: "80%"
    });




    render() {
        console.log(this.props.items);
        return (
            <div>
                <Dropdown placeholder='Select exercise' fluid selection options={this.exerciseOptions} onChange={this.handleChange}/>
                <Droppable droppableId="exercise">
                    {(provided, snapshot)=>(
                        <div
                            ref={provided.innerRef}
                            style={this.applyStyle(snapshot)}
                            {...provided.droppableProps}
                        >
                            {this.props.items.map(item =>(
                                <Card id={item.id} index={item.index} content={item.content}/>
                            ))}

                        </div>
                    )}

                </Droppable>
            </div>
        );
    }
}

export default ExerciseSelection;
