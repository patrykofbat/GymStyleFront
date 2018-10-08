import axios from "axios";



export default {
    user: {
        signUp: (data) => {
            let url = "http://192.168.1.6:8081/registration";
            axios({
                method: 'post',
                url,
                data,
                headers: { 'Content-Type': 'application/json' }
            }).then(response => console.log(response));
        },
        signIn: (data) => {
            let url = "http://192.168.1.3:80/login";
            axios({
                method: 'post',
                url,
                data,
                headers: { 'Content-Type': 'application/json' }
            }).then(response => console.log(response));
        }

    },

    training: {
        getExercises: (selectedOption) => {
            let url = "http://localhost:8081/exercises/" + selectedOption;
            return axios.get(url);
        },
        getPDF: (data) =>{
            let url = "http://localhost:8081/PDF";
            return axios({
                method:'post',
                url: url,
                data
            });
        }


    }

};