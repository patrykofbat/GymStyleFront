import React, {Component} from "react";
import {Grid, Segment} from "semantic-ui-react";
import TrainingSelection from "./TrainingSelection";
import ExerciseSelection from "./ExerciseSelection";
import DetailTraining from "./DetailTraining";
import {DragDropContext} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {
    addExercise,
    createTrainingOption,
    customizeTraining,
    getPDF,
    loadExercises,
    saveCurrentDropdownTraining,
    saveItems,
    saveTraining
} from "./trainingActions";
import {selectById} from "../../../utilis/arrayExtractor";
import PropTypes from 'prop-types';
import _ from "lodash";
import DownloadLinkPopUp from "../../../components/common/DownloadLinkPopUp";
import Spinner from "../../../components/common/Spinner";


class Training extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: props.currentItems,
      allItems: props.allItems,
      trainings: props.currentTrainingExercises,
      isDetailTraining: props.isDetailTraining,
      detailTrainings:props.detailTrainings,
        downloadPopUp:props.link,
        spin: false
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
    if (prevProps.isDetailTraining !== this.props.isDetailTraining)
      this.setState({ isDetailTraining: this.props.isDetailTraining });
    if (prevProps.detailTrainings !== this.props.detailTrainings)
      this.setState({ detailTrainings: this.props.detailTrainings });
    if (prevProps.link !== this.props.link)
        this.setState({ link: this.props.link});



  }

  downloadPDF = () => {
    this.props.getPDF(this.state.detailTrainings);
  };



  changeTable = (source, destination, result) => {
    let removed = source.splice(result.source.index, 1);
    let newItem = {
      id: result.draggableId,
      content: removed[0].content,
      index: result.destination.index,
      key: removed[0].key,
      link: removed[0].link,
      img: removed[0].img,
      description: removed[0].description,
      series:removed[0].series ? removed[0].series: undefined,
      tempo:removed[0].tempo ? removed[0].tempo: undefined,
      reps:removed[0].reps ? removed[0].reps: undefined


    };
    source = this.reIndexDeleted(
      source,
      result.source.index
    );
    destination = this.reIndexAdded(destination, newItem);


  };

  changeOption = currentId => {
    if (this.props.requestedIds.includes(currentId)) {
      this.setState({
        items: selectById(this.state.allItems, currentId)
      });
    }
    else {
      this.setState({
          items:[],
          spin:true
      });
      this.props.loadExercises(currentId);
    }


  };

  closePopUp = () => {
    this.setState({link:""});
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
        else if(result.destination.droppableId === "detailTraining"){
          let index =  _.findIndex(prevState.detailTrainings, (o) => o.nameOfTraining === this.props.currentDropdownTraining);
          this.changeTable(prevState.detailTrainings[index].exercises, prevState.detailTrainings[index].exercises, result);
        }
        else
          this.changeTable(prevState.trainings, prevState.trainings, result);

        this.props.saveTraining(prevState.items, prevState.trainings);
        return { ...prevState };
      });
    }

  };

  render() {
    if (!this.state.isDetailTraining) {
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
                  {(this.state.items.length === 0 && this.state.spin) && <Spinner/>}
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
    else {
      return (
        <DragDropContext
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <Grid.Column>
            <DetailTraining popUp={this.props.popUp} />
            <button onClick={this.downloadPDF}>Generate PDF</button>
              {this.state.link && <DownloadLinkPopUp link={this.state.link}
                                                     closePopUp={this.closePopUp}/>}
          </Grid.Column>
        </DragDropContext>
      )
    }
  }
}

const mapStateToProps = state => ({
  currentItems: state.currentItems,
  allItems: state.allItems,
  currentTrainingExercises: state.currentTrainingExercises,
  requestedIds: state.requestedIds,
  lastRequestedId: state.lastRequestedId,
  trainingOptions: state.trainingOptions,
  currentDropdownTraining: state.currentDropdownTraining,
  isDetailTraining: state.isDetailTraining,
  detailTrainings: state.trainings,
  link:state.link
});

const mapDispatchToProps = dispatch => ({
  addExercise: (items, tranings, requestedId) =>
    dispatch(addExercise(items, tranings, requestedId)),
  saveTraining: (items, currentTraningExercises) => dispatch(saveTraining(items, currentTraningExercises)),
  saveItems: (items) => dispatch(saveItems(items)),
  loadExercises: (currentId) => dispatch(loadExercises(currentId)),
  createTrainingOption: (traningOption) => dispatch(createTrainingOption(traningOption)),
  saveCurrentDropdownTraining: (currentDropdownTraining) => dispatch(saveCurrentDropdownTraining(currentDropdownTraining)),
  customizeTraining: (currentDropdownTraining, currentTraningExercises) => dispatch(customizeTraining(currentDropdownTraining, currentTraningExercises)),
  getPDF:(data) => dispatch(getPDF(data))
});


Training.propTypes = {
  currentItems: PropTypes.array,
  allItems: PropTypes.array,
  currentTraningExercises: PropTypes.array,
  requestedIds: PropTypes.array,
  lastRequestedId: PropTypes.number,
  trainingOptions: PropTypes.array,
  currentDropdownTraining: PropTypes.string

};

export default connect(mapStateToProps, mapDispatchToProps)(Training);
