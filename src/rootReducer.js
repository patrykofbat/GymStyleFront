import { selectById } from "./utilis/arrayExtractor";

const initialState = {
  allItems: [],
  currentItems:[],
  currentTraningExercises: [],
  requestedIds: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXERCISES":
      let newItems = [...state.items];
      let newTranings = [...state.tranings];

      newItems.push(...action.payload.items);
      newTranings.push(...action.payload.tranings);

      console.log(newItems);
      let selectedById = selectById(action.payload.items, action.payload.requestedId);
      console.log(selectedById);
      return {
        ...state,
        items: newItems,
        tranings: newTranings,
        requestedId: action.payload.requestedId
      };
    case "SAVE_ITEMS":
      console.log(action.payload);

      return state;
      
    default:
      return state;
    }
};
export default rootReducer;
