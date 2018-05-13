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
        let changeOption = this.props.changeOption;
        
        switch(data.value){
            case 'klata':
                changeOption(1000);
                break;
            case 'plecy':
                changeOption(2000);
                break;
            case 'nogi':
                changeOption(3000);
                break; 
        }

    };

    applyStyle = (snapshot) =>({
        // backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
        minHeight: "80%",
        marginTop: "10px",
    });






    render() {
        return (
            <div>
                <Dropdown placeholder='Select exercise' fluid selection options={this.exerciseOptions} onChange={this.handleChange}/>
                <Droppable droppableId="exercise">
                    {(provided, snapshot)=>(
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={this.applyStyle(snapshot)}
                        >
                            {this.props.items.map(item =>(
                                <Card popUp={this.props.popUp} id={item.id} index={item.index} content={item.content}/>
                            ))}

                        </div>
                    )}

                </Droppable>
            </div>
        );
    }
}

export default ExerciseSelection;
