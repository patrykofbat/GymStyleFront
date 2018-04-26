import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";
import Card from "./Card";
import {Droppable} from "react-beautiful-dnd";

class TrainingSelection extends Component {

    trainingOptions = [
        { key: 'nogi1', value: 'nogi', text: 'nogi' },
        { key: 'klata1', value: 'klata', text: 'klata' },
        { key: 'plecy1', value: 'plecy', text: 'plecy' },
        { key: 'new', value: 'new', text: 'Utwórz nowy plan' }

    ];

    applyStyle = (snapshot) =>({
            backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
            height: "80%"
        });


    render() {
        console.log(this.props);
        return (
            <div>
                <Dropdown placeholder='Select training' fluid selection options={this.trainingOptions} />
                <Droppable droppableId="training">
                    {(provided, snapshot)=>(
                        <div
                            ref={provided.innerRef}
                            style={this.applyStyle(snapshot)}
                            {...provided.droppableProps}
                        >
                            {this.props.items.map(item =>(
                                <Card id={item.id} index={item.index} content={item.content}/>
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
