import React, {Component} from 'react';
import TrainingMenu from "./TrainingMenu";
import { Grid, Menu, Segment } from 'semantic-ui-react'
import TrainingSelection from "./TrainingSelection";
import ExerciseSelection from "./ExerciseSelection";
import {DragDropContext}from "react-beautiful-dnd";

class Training extends Component {


    mockUpItems = [{id:0,content:"Wyciskanie lezac",index:0, key:0},{id:1,content:"Martwy ciag",index:1, key:1},{id:2,content:"Przysiad",index:2, key:2}];
    mockUpTranings = [{id:3,content:"Cos tam",index:0, key:3}];

    reindex = (list,index) => {
        let reindexedList = [...list];
        for(let i = index; i < list.length; i++){
            reindexedList[i].index = reindexedList[i].index--;
        }
        return reindexedList;

    };

    constructor(props) {
        super(props);
        this.state = {
            items: this.mockUpItems ,
            trainings: this.mockUpTranings
        };
    };

    onDragEnd = (result)=>{
        console.log(result.destination.droppableId);
        if (!result.destination) {
            return;
        }

        if(result.destination.droppableId === "training" && result.source.droppableId !== "training") {
            this.setState((prevState, props) => {
                let removed = prevState.items.splice(result.source.index,1);
                console.log(removed);
                prevState.items = this.reindex(prevState.items, result.source.index);
                prevState.trainings.push({
                    id: result.draggableId,
                    content: removed[0].content,
                    index: result.source.index,
                    key: removed[0].key
                });

                return {
                    ...prevState
                }
            });
        }
        else if(result.destination.droppableId === "exercise"  && result.source.droppableId !== "exercise"){
            this.setState((prevState, props) => {
                let removed = prevState.trainings.splice(result.source.index,1);
                prevState.trainings = this.reindex(prevState.trainings, result.source.index);
                prevState.items.push({
                    id: result.draggableId,
                    content: removed[0].content,
                    index: result.source.index,
                    key: removed[0].key

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
