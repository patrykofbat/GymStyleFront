import React, { Component } from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import _ from "lodash";

class DetailTraining extends Component {

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
        console.log(content);
    };


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

const mapStateToProps = (state) => ({
    trainings: state.trainings,
    currentDropdownTraining: state.currentDropdownTraining

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DetailTraining);

