import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";
class ExerciseSelection extends Component {

    exerciseOptions = [
        { key: 'nogi', value: 'nogi', text: 'nogi' },
        { key: 'klata', value: 'klata', text: 'klata' },
        { key: 'plecy', value: 'plecy', text: 'plecy' },

    ];

    handleChange = (e, data)=>{
        console.log(data);

    };




    render() {
        return (
            <div>
                <Dropdown placeholder='Select exercise' fluid selection options={this.exerciseOptions} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default ExerciseSelection;
