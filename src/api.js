import axios from "axios"

export default {
    user: {
        signUp: (data) => {
            let url = "http://192.168.198.84:8080/user";
            axios({
                method: 'post',
                url,
                data,
                headers: {'Content-Type': 'application/json'}
            }).then(response => console.log(response));
        }

    }

}



