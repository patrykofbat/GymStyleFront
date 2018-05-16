const initialState = {
  items: [],
  tranings: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXERCISES":
      console.log(action.payload.tranings);
      return {
        ...state,
        items: [...state.items, action.payload.items],
        tranings: [...state.tranings, action.payload.tranings]
      };
    default:
      return state;
    }
};
export default rootReducer;
