import api from "../../api";

export const signUpUser = (data) => (dispatch) =>{
    console.log("tutaj");
    api.user.signUp(data);

};