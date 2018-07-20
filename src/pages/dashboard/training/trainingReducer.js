import { selectById } from "../../../utilis/arrayExtractor";
import _ from "lodash";


const initialState = {
  allItems: [],
  currentItems: [],
  currentTraningExercises: [],
  requestedIds: [],
  lastRequestedId: 0
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

      return {
        ...state,
        allItems: newItems,
        currentItems: action.payload.items
      };


    case "LOAD_ITEMS":
      let newRequestedIds = [...state.requestedIds];
      let newItems = [...state.allItems];

      if (_.indexOf(newRequestedIds, action.payload.items[0].id) === -1) {
        newItems = newItems.concat(action.payload.items);
        newRequestedIds.push(action.payload.items[0].id)
      }

      return {
        ...state,
        currentItems: action.payload.items,
        requestedIds: newRequestedIds,
        lastRequestedId: action.payload.items[0].id,
        allItems: newItems
      }


    default:
      return state;
  }
};


export default trainingReducer;