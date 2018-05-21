export const request = (items, tranings) => {
  console.log("siemka");
  return {
    type: "REQUEST_ITEMS",
    payload: {
      items,
      tranings
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
