import api from "../../../api";


export const saveTraining = (items, currentTraningExercises) => {
  return {
    type: "SAVE_TRAINING",
    payload: {
      items,
      currentTraningExercises
    }
  };
};

export const addExercise = (items, tranings, requestedId) => {
  return {
    type: "ADD_EXERCISES",
    payload: {
      items,
      tranings,
      requestedId
    }
  };
};

export const applyExercises = currentId => {
  return {
    type: "APPLY_EXERCISES",
    payload: {
      currentId
    }
  };
};


export const saveItems = (items) => {
  return {
    type: "SAVE_ITEMS",
    payload: {
      items
    }
  };
};

export const createTrainingOption = (trainingOption) => {
  return {
    type: "CREATE_TRAINING_OPTION",
    payload: {
      trainingOption
    }
  }
}

export const saveCurrentDropdownTraining = (currentDropdownTraining) => {
  return {
    type: "SAVE_CURRENT_TRAINING",
    payload: {
      currentDropdownTraining
    }
  }
}

export const loader = (items) => {
  return {
    type: "LOAD_ITEMS",
    payload: {
      items
    }
  }
}

export const customizeTraining = ({ training = { id: 2, index: 2, link: "none", content: "none" }, series = 3, reps = 8, tempo = "3110" } = {}) => {
  const { id, index, ...newFormatTraining } = training;
  return {
    type: "CUSTOMIZE_TRAINING",
    payload: {
      ...newFormatTraining,
      details: {
        series,
        reps,
        tempo
      }
    }
  }
}


export const loadExercises = (id) => {
  return (dispatch) => {
    return api.training.getExercises(id).then((response) => {
      if (response.status === 200) {
        console.log("load");
        let items = response.data.map((obj, index, data) => {
          return {
            id: obj.id,
            content: obj.title,
            index,
            link: obj.link,
            img: obj.img,
            description: obj.description
          }
        });
        dispatch(loader(items));
      }
    })
  }
}





