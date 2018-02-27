export const userReducer = (state = {
    name:"noname"
}, action) => {
    let newState = {...state};
    switch (action.type) {
        case "SIGN_UP":
            newState.name = action.payload;
            break;
        default:
            console.log("witaj");
            break;

    }
    return newState;
};
