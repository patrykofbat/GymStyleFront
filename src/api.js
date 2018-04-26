import axios from "axios"

export default {
    user: {
        signUp: (data) => {
            let url = "http://localhost:9000/user";
            axios({
                method: 'post',
                url,
                data,
                headers: {'Content-Type': 'application/json'}
            }).then(response => console.log(response));
        },
        signIn: (data) => {
            let url = "http://192.168.63.211:8080/login";
            axios({
                method: 'post',
                url,
                data,
                headers: {'Content-Type': 'application/json'}
            }).then(response => console.log(response));
        }

    }

}



