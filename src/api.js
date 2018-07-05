import axios from "axios"

export default {
    user: {
        signUp: (data) => {
            let url = "http://192.168.1.3:80/GymStyleBackend/index.php";
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

    getExercises: (selectedOption, applyExercises) => {
        let url = 'http://192.168.1.6:80//GymStyleBackend/index.php'
        axios({
            method: 'post',
            url,
            data: {
                selectedOption
            }
        }).then(
            (response) => {
                if (response.status === 200) {
                    console.log(response);
                    applyExercises(response.data.map((obj, index, data)=> {
                        return {
                            id: obj.id,
                            content: obj.title,
                            index,
                            link: obj.link,
                            img: obj.img,
                            description: obj.description
                          };
                    }));
                }

            });


    }

}