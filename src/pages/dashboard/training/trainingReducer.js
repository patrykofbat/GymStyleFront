import { selectById } from "../../../utilis/arrayExtractor";


const initialState = {
  allItems: [],
  currentItems: [],
  currentTraningExercises: [],
  requestedIds: []
};


const trainingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TRAINING":
      return {
        ...state,
        currentItems: action.payload.items,
        currentTraningExercises: action.payload.currentTraningExercises
      };

    case "SAVE_ITEMS":
      let newItems = state.allItems.concat(action.payload.items);
      let newRequestedIds = [...state.requestedIds];
      newRequestedIds.push(action.payload.items[0].id)

      console.log(state.requestedIds);

      return {
        ...state,
        allItems: newItems,
        currentItems: action.payload.items,
        requestedIds: newRequestedIds
      };

    case "APPLY_EXERCISES":
      return {
        ...state,
        currentItems: selectById(state.allItems, action.payload.currentId)
      };

    case "LOAD_ITEMS":
      return {
        ...state,
        currentItems: action.payload.items
      }


    default:
      return state;
  }
};


export default trainingReducer;