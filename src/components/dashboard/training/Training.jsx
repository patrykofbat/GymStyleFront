import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import TrainingSelection from "./TrainingSelection";
import ExerciseSelection from "./ExerciseSelection";
import { DragDropContext } from "react-beautiful-dnd";
import api from "../../../api";
import { connect } from "react-redux";
import {
  requestExercises,
  addExercise
} from "../../../actions/dashboardActions";
import { selectById } from "../../../utilis/arrayExtractor";

class Training extends Component {
  // mockUpTranings = [{ id: 3, content: "Cos tam", index: 0, key: 3 }];

  constructor(props) {
    super(props);
    this.state = {
      database: [],
      items: props.items,
      trainings: props.tranings,
      requestedIds: []
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
    console.log(this.props.request);
    this.props.request("elo", "siemka");
    // this.props.addExercise(this.state.items, this.state.trainings, this.state.requestedId);
  }

  applyExercises = (currentId,data) => {
    let items = data.map((obj, index, data) => {
      return {
        id: obj.id,
        content: obj.title,
        index,
        link: obj.link,
        img: obj.img,
        description: obj.description
      };
    });
    console.log(items);
    console.log(this.state);

    this.setState((prevState) => ({
      items: prevState.items.concat(items),
      requestedIds: prevState.requestedIds.concat([currentId])
    }));

   
    
  };

  changeOption = currentId => {
    if (this.state.requestedIds.includes(currentId)) {
      let items = selectById(this.state.items).map((obj, index, data) => {
        return {
          id: obj.id,
          content: obj.title,
          index,
          link: obj.link,
          img: obj.img,
          description: obj.description
        };
      });
      this.setState(prevState => ({
        items
      }));
    } else {
      api.getExercises(currentId, this.applyExercises);
    }
  };

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    if (
      result.destination.droppableId === "training" &&
      result.source.droppableId !== "training"
    ) {
      this.setState((prevState, props) => {
        let removed = prevState.items.splice(result.source.index, 1);
        let newItem = {
          id: result.draggableId,
          content: removed[0].content,
          index: result.destination.index,
          key: removed[0].key,
          link: removed[0].link,
          img: removed[0].img,
          description: removed[0].description
        };
        prevState.items = this.reIndexDeleted(
          prevState.items,
          result.source.index
        );
        prevState.trainings = this.reIndexAdded(prevState.trainings, newItem);
        this.props.addExercise(
          prevState.items,
          prevState.trainings,
          prevState.requestedId
        );
        return {
          ...prevState
        };
      });
    } else if (
      result.destination.droppableId === "exercise" &&
      result.source.droppableId !== "exercise"
    ) {
      this.setState((prevState, props) => {
        let removed = prevState.trainings.splice(result.source.index, 1);
        let newItem = {
          id: result.draggableId,
          content: removed[0].content,
          index: result.destination.index,
          key: removed[0].key,
          link: removed[0].link,
          img: removed[0].img,
          description: removed[0].description
        };
        prevState.trainings = this.reIndexDeleted(
          prevState.trainings,
          result.source.index
        );
        prevState.items = this.reIndexAdded(prevState.items, newItem);
        this.props.addExercise(
          prevState.items,
          prevState.trainings,
          prevState.requestedId
        );
        return {
          ...prevState
        };
      });
    } else if (
      result.destination.droppableId === "exercise" &&
      result.source.droppableId === "exercise"
    ) {
      this.setState((prevState, props) => {
        let picked = prevState.items.splice(result.source.index, 1);
        picked[0].index = result.destination.index;
        prevState.items = this.reIndexDeleted(
          prevState.items,
          result.source.index
        );
        prevState.items = this.reIndexAdded(prevState.items, picked[0]);
        this.props.addExercise(
          prevState.items,
          prevState.trainings,
          prevState.requestedId
        );
        return { ...prevState };
      });
    } else if (
      result.destination.droppableId === "training" &&
      result.source.droppableId === "training"
    ) {
      this.setState((prevState, props) => {
        let picked = prevState.trainings.splice(result.source.index, 1);
        picked[0].index = result.destination.index;
        prevState.trainings = this.reIndexDeleted(
          prevState.trainings,
          result.source.index
        );
        prevState.tranings = this.reIndexAdded(prevState.trainings, picked[0]);
        this.props.addExercise(
          prevState.items,
          prevState.trainings,
          prevState.requestedId
        );
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
  items: state.items,
  tranings: state.tranings
});

const mapDispatchToProps = dispatch => ({
  addExercise: (items, tranings, requestedId) =>
    dispatch(addExercise(items, tranings, requestedId)),
  request: (items, tranings) => dispatch(requestExercises(items, tranings))
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
