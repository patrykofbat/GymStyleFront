import _ from "lodash";

const initialState = {
  allItems: [],
  currentItems: [],
  trainingOptions: [{ key: "new", value: "new", text: "Utwórz nowy plan" }],
  trainings: [],
  currentTrainingExercises: [],
  requestedIds: [],
  lastRequestedId: 0,
  currentDropdownTraining: "",
  link: "",
  isDetailTraining: false
};

const trainingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TRAINING":
      return {
        ...state,
        currentItems: action.payload.items,
        currentTrainingExercises: action.payload.currentTraningExercises
      };

    case "SAVE_ITEMS":
      return {
        ...state,
        currentItems: action.payload.items
      };

    case "CHANGE_LOCATION":
      localStorage.clear();

      return {
        ...state,
        location: action.payload.location
      };

    case "LOAD_ITEMS":
      let newRequestedIds = [...state.requestedIds];
      let newItems = [...state.allItems];

      if (_.indexOf(newRequestedIds, action.payload.items[0].id) === -1) {
        newItems = newItems.concat(action.payload.items);
        newRequestedIds.push(action.payload.items[0].id);
      }

      return {
        ...state,
        currentItems: action.payload.items,
        requestedIds: newRequestedIds,
        lastRequestedId: action.payload.items[0].id,
        allItems: newItems
      };

    case "CREATE_TRAINING_OPTION":
      let newTrainingOptions = [...state.trainingOptions];
      newTrainingOptions.push(action.payload.trainingOption);

      return {
        ...state,
        trainingOptions: newTrainingOptions,
        currentDropdownTraining: action.payload.trainingOption.value
      };

    case "CUSTOMIZE_TRAINING":
      let newTrainings = [];
      newTrainings.push(action.payload);
      return {
        ...state,
        trainings: newTrainings,
        isDetailTraining: action.payload.isDetailTraining
      };

    case "SAVE_CURRENT_TRAINING":
      return {
        ...state,
        currentDropdownTraining: action.payload.currentDropdownTraining
      };

    case "DOWNLOAD_PDF":
      return {
        ...state,
        link: action.payload.link
      };

    case "CHANGE_DETAILS_TRAINING":
      let newDetailTrainings = [...state.trainings];

      return {
        ...state,
        trainings: newDetailTrainings.map(item => {
          return {
            ...item,
            exercises: item.exercises.map((exercise, index) => {
              return {
                ...exercise,
                ...action.payload.details[index]
              };
            })
          };
        })
      };

    default:
      return state;
  }
};

export default trainingReducer;
