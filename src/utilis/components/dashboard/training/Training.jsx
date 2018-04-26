import React, {Component} from 'react';
import TrainingMenu from "./TrainingMenu";
import { Grid, Menu, Segment } from 'semantic-ui-react'
import TrainingSelection from "./TrainingSelection";
import ExerciseSelection from "./ExerciseSelection";
import {DragDropContext}from "react-beautiful-dnd";

class Training extends Component {


    mockUpItems = [{id:0,content:"Wyciskanie lezac",index:0, key:0},{id:1,content:"Martwy ciag",index:1, key:1},{id:2,content:"Przysiad",index:2, key:2}];
    mockUpTranings = [{id:3,content:"Cos tam",index:0, key:3}];

    reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    constructor(props) {
        super(props);
        this.state = {
            items: this.mockUpItems ,
            trainings: this.mockUpTranings
        };
    };

    onDragEnd = (result)=>{
        console.log(result);
        if (!result.destination) {
            return;
        }

        if(result.destination.droppableId === "training") {
            console.log("elo");
            this.setState((prevState, props) => {
                let poped = prevState.items.pop();
                prevState.trainings.push({
                    id: result.draggableId,
                    content: poped.content,
                    index: result.source.index
                });

                return {
                    ...prevState
                }
            });
        }
        else {
            console.log("elo");
            this.setState((prevState, props) => {
                let poped = prevState.trainings.pop();
                prevState.items.push({
                    id: result.draggableId,
                    content: poped.content,
                    index: result.source.index
                });

                return {
                    ...prevState
                }
            });
        }


    };

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Grid style={{height: '75vh'}}>
                    <Grid.Column stretched  width={8}>
                        <Segment>
                            <h2>Trening</h2>
                            <TrainingSelection items={this.state.trainings}/>

                        </Segment>
                    </Grid.Column>
                    <Grid.Column stretched  width={8}>
                        <Segment>
                            <h2>Cwiczenia</h2>
                            <ExerciseSelection items={this.state.items}/>

                        </Segment>
                    </Grid.Column>
                </Grid>
            </DragDropContext>
        );
    }
}

export default Training;
