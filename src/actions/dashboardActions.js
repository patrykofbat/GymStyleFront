
export const saveItems = (items) => {
  return {
    type: "SAVE_ITEMS",
    payload: {
      items
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
