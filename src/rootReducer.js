import { selectById } from "./utilis/arrayExtractor";

const initialState = {
  allItems: [],
  currentItems:[],
  currentTraningExercises: [],
  requestedIds: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case "SAVE_ITEMS":
      return {
        ...state,
        currentItems: action.payload.items,
        currentTraningExercises: action.payload.currentTraningExercises
      };

    case "APPLY_EXERCISES":
      return {
        ...state,
        currentItems: selectById(state.allItems, action.payload.currentId)
      };
      
    default:
      return state;
    }
};
export default rootReducer;
