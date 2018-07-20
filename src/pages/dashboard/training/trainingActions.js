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

export const loader = (items) => {
  return {
    type: "LOAD_ITEMS",
    payload: {
      items
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





