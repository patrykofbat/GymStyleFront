import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import TrainingSelection from "./TrainingSelection";
import ExerciseSelection from "./ExerciseSelection";
import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";

class Training extends Component {

    mockUpItems = [{ id: 0, content: "Wyciskanie lezac", index: 0, key: 0 }, { id: 1, content: "Martwy ciag", index: 1, key: 1 }, { id: 2, content: "Przysiad", index: 2, key: 2 }];
    mockUpTranings = [{ id: 3, content: "Cos tam", index: 0, key: 3 }];

    reIndexDeleted = (list, index) => {
        let reindexedList = [...list];
        for (let i = index; i < list.length; i++) {
            reindexedList[i].index--;
        }
        return reindexedList;

    };
    reIndexAdded = (list, newItem) => {
        let removed = list.splice(newItem.index, list.length - newItem.index);
        list.push(newItem);
        removed.forEach(item => {
            item.index++;
            list.push(item);
        });
        return list;

    };

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8080/exercise',
            data: {
                selectedOption: this.state.selectedOption
            }
        }).then(
            (response) => {
                console.log(response);
            });
    }

    changeOption = (selectedOption) => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/exercise',
            data: {
                selectedOption
            }
        }
        ).then(
            (response) => {
                console.log(response);
            });
        console.log(selectedOption);

        this.setState({
            selectedOption
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            items: this.mockUpItems,
            trainings: this.mockUpTranings,
            selectedOption: 1000
        };
    };

    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.droppableId === "training" && result.source.droppableId !== "training") {
            this.setState((prevState, props) => {
                let removed = prevState.items.splice(result.source.index, 1);
                let newItem = {
                    id: result.draggableId,
                    content: removed[0].content,
                    index: result.destination.index,
                    key: removed[0].key
                };
                console.log(removed);
                prevState.items = this.reIndexDeleted(prevState.items, result.source.index);
                prevState.trainings = this.reIndexAdded(prevState.trainings, newItem);
                return {
                    ...prevState
                };
            });
        }
        else if (result.destination.droppableId === "exercise" && result.source.droppableId !== "exercise") {
            this.setState((prevState, props) => {
                let removed = prevState.trainings.splice(result.source.index, 1);
                let newItem = {
                    id: result.draggableId,
                    content: removed[0].content,
                    index: result.destination.index,
                    key: removed[0].key
                };
                prevState.trainings = this.reIndexDeleted(prevState.trainings, result.source.index);
                prevState.items = this.reIndexAdded(prevState.items, newItem);
                return {
                    ...prevState
                };
            });
        }
        else if (result.destination.droppableId === "exercise" && result.source.droppableId === "exercise") {
            this.setState((prevState, props) => {
                let picked = prevState.items.splice(result.source.index, 1);
                picked[0].index = result.destination.index;
                prevState.items = this.reIndexDeleted(prevState.items, result.source.index);
                prevState.items = this.reIndexAdded(prevState.items, picked[0]);
                return { ...prevState };
            });

        }
        else if (result.destination.droppableId === "training" && result.source.droppableId === "training") {
            this.setState((prevState, props) => {
                let picked = prevState.trainings.splice(result.source.index, 1);
                picked[0].index = result.destination.index;
                prevState.trainings = this.reIndexDeleted(prevState.trainings, result.source.index);
                prevState.tranings = this.reIndexAdded(prevState.trainings, picked[0]);
                return { ...prevState };
            });
        }


    };

    render() {
        return (
            <DragDropContext onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd}>
                <Grid style={{ height: '75vh' }}>
                    <Grid.Column stretched width={8}>
                        <Segment>
                            <h2>Trening</h2>
                            <TrainingSelection popUp={this.props.popUp} items={this.state.trainings} />

                        </Segment>
                    </Grid.Column>
                    <Grid.Column stretched width={8}>
                        <Segment>
                            <h2>Cwiczenia</h2>
                            <ExerciseSelection changeOption={this.changeOption} popUp={this.props.popUp} items={this.state.items} />

                        </Segment>
                    </Grid.Column>
                </Grid>
            </DragDropContext>
        );
    }
}

export default Training;
