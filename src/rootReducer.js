const initialState = {
  items: [],
  tranings: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXERCISES":
      console.log(state);
      return {
        ...state,
        items: [...action.payload.items],
        tranings: [...action.payload.tranings]
      };
    default:
      return state;
    }
};
export default rootReducer;
