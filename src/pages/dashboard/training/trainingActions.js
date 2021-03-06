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
};

export const saveCurrentDropdownTraining = (currentDropdownTraining) => {
  return {
    type: "SAVE_CURRENT_TRAINING",
    payload: {
      currentDropdownTraining
    }
  }
};

export const loader = (items) => {
  return {
    type: "LOAD_ITEMS",
    payload: {
      items
    }
  }
};
export const changeDetailsTraining = (details) => {
  return {
    type: "CHANGE_DETAILS_TRAINING",
    payload: {
      details
    }
  }
}

export const customizeTraining = (nameOfTraining, exercises = [], { series = "3", reps = "8", tempo = "2110" } = {}) => {
  let newExercises = exercises.map((obj) => {
    const { ...newExerciseFormat } = { ...obj, series, reps, tempo };
    return newExerciseFormat;

  });

  return {
    type: "CUSTOMIZE_TRAINING",
    payload: {
      nameOfTraining,
      exercises: newExercises,
      isDetailTraining: true
    }
  }
};


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
};

export const getPDF = (data) => {
  return (dispatch) => {
    return api.training.getPDF(data).then((response) =>{
      if(response.status === 200){
        console.log(response.data);
        dispatch(downloadPDF(response.data.link))
      }
    })
  }

};

export const downloadPDF = (link) =>{
  return {
    type:"DOWNLOAD_PDF",
      payload:{
        link
      }
  }
};







