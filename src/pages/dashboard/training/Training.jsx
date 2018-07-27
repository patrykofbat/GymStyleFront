import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import TrainingSelection from "./TrainingSelection";
import ExerciseSelection from "./ExerciseSelection";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { saveTraining, saveItems, addExercise, loadExercises, createTrainingOption, saveCurrentDropdownTraining, customizeTraining } from "./trainingActions";
import { selectById } from "../../../utilis/arrayExtractor";
import PropTypes from 'prop-types';


class Training extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: props.currentItems,
      allItems: props.allItems,
      trainings: props.currentTrainingExercises
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

  componentDidUpdate(prevProps) {
    if (prevProps.currentItems !== this.props.currentItems)
      this.setState({ items: this.props.currentItems });
    if (prevProps.allItems !== this.props.allItems)
      this.setState({ allItems: this.props.allItems });


  }



  changeTable = (source, destination, result) => {
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
    if (this.props.requestedIds.includes(currentId)) {
      this.setState({
        items: selectById(this.state.allItems, currentId)
      });
    }
    else {
      this.props.loadExercises(currentId);
    }


  };

  onDragEnd = result => {
    if (!result.destination || !this.props.currentDropdownTraining) {
      return;
    }

    if (result.destination.droppableId !== result.source.droppableId) {
      this.setState((prevState) => {
        if (result.destination.droppableId === "training")
          this.changeTable(prevState.items, prevState.trainings, result);
        else
          this.changeTable(prevState.trainings, prevState.items, result);

        this.props.saveTraining(prevState.items, prevState.trainings);
        return { ...prevState };
      });
    }
    else {
      this.setState((prevState) => {
        if (result.destination.droppableId === "exercise")
          this.changeTable(prevState.items, prevState.items, result);
        else
          this.changeTable(prevState.trainings, prevState.trainings, result);

        this.props.saveTraining(prevState.items, prevState.trainings);
        return { ...prevState };
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
              <ExerciseSelection
                changeOption={this.changeOption}
                popUp={this.props.popUp}
                items={this.state.items}
                lastRequestedId={this.props.requestedIds}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            stretched
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
            width={8}
          >
            <Segment style={{ display: "flex", flexDirection: "column" }}>
              <TrainingSelection
                popUp={this.props.popUp}
                items={this.state.trainings}
                createTrainingOption={this.props.createTrainingOption}
                trainingOptions={this.props.trainingOptions}
                saveCurrentDropdownTraining={this.props.saveCurrentDropdownTraining}
                customizeTraining={this.props.customizeTraining}
                currentDropdownTraining={this.props.currentDropdownTraining}
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
  currentTrainingExercises: state.currentTrainingExercises,
  requestedIds: state.requestedIds,
  lastRequestedId: state.lastRequestedId,
  trainingOptions: state.trainingOptions,
  currentDropdownTraining: state.currentDropdownTraining
});

const mapDispatchToProps = dispatch => ({
  addExercise: (items, tranings, requestedId) =>
    dispatch(addExercise(items, tranings, requestedId)),
  saveTraining: (items, currentTraningExercises) => dispatch(saveTraining(items, currentTraningExercises)),
  saveItems: (items) => dispatch(saveItems(items)),
  loadExercises: (currentId) => dispatch(loadExercises(currentId)),
  createTrainingOption: (traningOption) => dispatch(createTrainingOption(traningOption)),
  saveCurrentDropdownTraining: (currentDropdownTraining) => dispatch(saveCurrentDropdownTraining(currentDropdownTraining)),
  customizeTraining: (currentDropdownTraining, currentTraningExercises) => dispatch(customizeTraining(currentDropdownTraining, currentTraningExercises))
});


Training.propTypes = {
  currentItems: PropTypes.array,
  allItems: PropTypes.array,
  currentTraningExercises: PropTypes.array,
  requestedIds: PropTypes.array,
  lastRequestedId: PropTypes.number,
  trainingOptions: PropTypes.array,
  currentDropdownTraining: PropTypes.string

}

export default connect(mapStateToProps, mapDispatchToProps)(Training);
