import React, { Component } from 'react';
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import { Grid, Segment, Dropdown } from 'semantic-ui-react';



class ExerciseSelection extends Component {

    exerciseOptions = [
        { key: 'nogi', value: 'nogi', text: 'nogi' },
        { key: 'klata', value: 'klata', text: 'klata' },
        { key: 'plecy', value: 'plecy', text: 'plecy' },

    ];

    handleChange = (e, data) => {
        let changeOption = this.props.changeOption;

        switch (data.value) {
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

    applyStyle = (snapshot) => ({
        backgroundColor: snapshot.isDraggingOver ? 'grey' : 'white',
        height:"100%",
        marginTop: "10px",
        overflowY: "auto",
        overflowX: "hidden"


    });






    render() {
        return (
            <div style = {{display: 'flex', flexDirection: 'column'}}>
                <div>
                    <h2 style={{userSelect: "none"}}>Cwiczenia</h2>
                    <Dropdown placeholder='Select exercise' style={{userSelect: "none"}} fluid selection options={this.exerciseOptions} onChange={this.handleChange} />
                </div>
                <Droppable droppableId="exercise">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={this.applyStyle(snapshot)}
                        >

                            {this.props.items.map(item => (
                                <Card popUp={this.props.popUp} id={item.id} index={item.index} content={item.content} link={item.link} />
                            ))}


                        </div>
                    )}

                </Droppable>
            </div>
        );
    }
}

export default ExerciseSelection;
