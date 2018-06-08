import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import TrainingSelection from "./TrainingSelection";
import ExerciseSelection from "./ExerciseSelection";
import { DragDropContext } from "react-beautiful-dnd";
import api from "../../../api";
import { connect } from "react-redux";
import {saveTraining, saveItems, addExercise, applyExercises} from "../../../actions/dashboardActions";
import { selectById } from "../../../utilis/arrayExtractor";

class Training extends Component {
  // mockUpTranings = [{ id: 3, content: "Cos tam", index: 0, key: 3 }];

  constructor(props) {
    super(props);
    this.state = {
      items: props.currentItems,
      allItems:props.allItems,
      trainings: props.currentTraningExercises
    };
  }

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

  componentWillUnmount() {
    this.props.saveTraining(this.state.items, this.state.trainings);
  }

  applyExercises = (items) => {
    this.props.saveItems(items);
    console.log(this.props.allItems);
    this.setState({
      items,
      allItems: this.props.allItems
    });
  };

  changeTable = (source, destination, result) =>{
    let removed = source.splice(result.source.index, 1);
    let newItem = {
      id: result.draggableId,
      content: removed[0].content,
      index: result.destination.index,
      key: removed[0].key,
      link: removed[0].link,
      img: removed[0].img,
      description: removed[0].description
    };
    source = this.reIndexDeleted(
      source,
      result.source.index
    );
    destination = this.reIndexAdded(destination, newItem);

  }

  changeOption = currentId => {
    if(this.props.requestedIds.includes(currentId)){
      this.setState({
        items:selectById(this.state.allItems, currentId)
      });
    }
    else{
      api.getExercises(currentId, this.applyExercises);
    }

    
  };

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    if(result.destination.droppableId !== result.source.droppableId){
      this.setState((prevState) => {
        if(result.destination.droppableId === "training")
          this.changeTable(prevState.items, prevState.trainings, result);
        else
          this.changeTable(prevState.trainings, prevState.items, result);
        return {...prevState};
      });
    }
    else{
      this.setState((prevState) =>{
        if(result.destination.droppableId === "exercise")
          this.changeTable(prevState.items, prevState.items, result);
        else
          this.changeTable(prevState.trainings, prevState.trainings, result);
      });
    }
  
  };

  render() {
    return (
      <DragDropContext
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Grid style={{ height: "75vh", display: "flex", flexDirection: "row" }}>
          <Grid.Column
            stretched
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
            width={8}
          >
            <Segment style={{ display: "flex", flexDirection: "column" }}>
              <TrainingSelection
                popUp={this.props.popUp}
                items={this.state.trainings}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            stretched
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
            width={8}
          >
            <Segment style={{ display: "flex", flexDirection: "column" }}>
              <ExerciseSelection
                changeOption={this.changeOption}
                popUp={this.props.popUp}
                items={this.state.items}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  currentItems: state.currentItems,
  allItems: state.allItems,
  currentTraningExercises: state.currentTraningExercises,
  requestedIds: state.requestedIds
});

const mapDispatchToProps = dispatch => ({
  addExercise: (items, tranings, requestedId) =>
    dispatch(addExercise(items, tranings, requestedId)),
  saveTraining: (items, currentTraningExercises) => dispatch(saveTraining(items, currentTraningExercises)),
  saveItems: (items) => dispatch(saveItems(items)),
  applyExercises: (currentId) => dispatch(applyExercises(currentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
