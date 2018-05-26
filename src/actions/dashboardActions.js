export const saveTraining = (items, currentTraningExercises) => {
  return {
    type: "SAVE_ITEMS",
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
