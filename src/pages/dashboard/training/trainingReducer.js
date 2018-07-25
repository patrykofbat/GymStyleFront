import _ from "lodash";


const initialState = {
  allItems: [],
  currentItems: [],
  trainingOptions: [{ key: "new", value: "new", text: "Utwórz nowy plan" }],
  trainings: [],
  currentTraningExercises: [],
  requestedIds: [],
  lastRequestedId: 0,
  currentDropdownTraining: ""
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

    case "CREATE_TRAINING_OPTION":
      let newTrainingOptions = [...state.trainingOptions];
      newTrainingOptions.push(action.payload.trainingOption);

      return {
        ...state,
        trainingOptions: newTrainingOptions,
        currentDropdownTraining: action.payload.trainingOption.value
      }

    case "SAVE_CURRENT_TRAINING":

      return {
        ...state,
        currentDropdownTraining: action.payload.currentDropdownTraining
      }


    default:
      return state;
  }
};


export default trainingReducer;