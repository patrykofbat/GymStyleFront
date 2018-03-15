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
        }

    }

}



