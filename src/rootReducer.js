import {combineReducers} from "redux";
import {userReducer} from "./utilis/reducers/userReducer";



export default combineReducers({
    user: userReducer
})