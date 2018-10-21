import React, { Component } from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import _ from "lodash";

class DetailTraining extends Component {
    
    state = {
        details:this.props.trainings[0].exercises.map(({series, reps, tempo})=>{
            return {
                series,
                reps,
                tempo
            }
        })
    }

    applyStyle = snapshot => ({
        boxSizing: "border-box",
        marginTop: "10px",
        minHeight: "30vh",
        overflowY: "auto",
        overflowX: "hidden"
    });

    extractExercises = () => {
        let index = _.findIndex(this.props.trainings, (o) => o.nameOfTraining === this.props.currentDropdownTraining);
        return this.props.trainings[index].exercises;
    };

    handleChange = (event, content) => {
        event.persist();
        let index = _.findIndex(this.props.trainings[0].exercises, (o) => o.content === content);

        this.setState((prevState) => {
            let newDetails = [...prevState.details];
            newDetails[index] = {...newDetails[index], [event.target.name]: event.target.value}
            return {
                ...prevState,
                details: newDetails
            }
        }, this.updateRedux);
       
    };

    updateRedux = () => {
        this.props.changeDetailsTraining(this.state.details);
    }


    render() {
        return (
            <Droppable style={{ flex: 1 }} droppableId="detailTraining">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={this.applyStyle(snapshot)}
                    >

                        {this.extractExercises() && this.extractExercises().map(item => (
                            <Card
                                link={item.link}
                                popUp={this.props.popUp}
                                id={item.id}
                                index={item.index}
                                content={item.content}
                                key={item.id}
                                series={item.series}
                                reps={item.reps}
                                tempo={item.tempo}
                                handleChange={this.handleChange}

                            />

                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    }

}


export default DetailTraining;

