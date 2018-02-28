import api from "../../api";

export const signUpUser = (data)=> (dispatch) =>{
    api.user.signUp(data).then(res => console.log(res));

};