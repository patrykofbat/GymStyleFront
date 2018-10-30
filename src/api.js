import axios from "axios";
import config from "./config";

export default {
  user: {
    signUp: data =>
      axios({
        method: "post",
        url: config.host + "/registration",
        data,
        headers: { "Content-Type": "application/json" }
      }),

    signIn: data =>
      axios({
        method: "post",
        url: config.host + "/login",
        data,
        headers: { "Content-Type": "application/json" }
      })
  },

  training: {
    getExercises: selectedOption =>
      axios({
        method: "get",
        url: config.host + "/exercises/" + selectedOption,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }),
    getPDF: data => {
      let url = config.host + "/PDF";
      return axios({
        method: "post",
        url: url,
        data
      });
    }
  }
};
