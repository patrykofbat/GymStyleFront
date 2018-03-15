import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";

class TrainingSelection extends Component {

    trainingOptions = [
        { key: 'nogi1', value: 'nogi', text: 'nogi' },
        { key: 'klata1', value: 'klata', text: 'klata' },
        { key: 'plecy1', value: 'plecy', text: 'plecy' },
        { key: 'new', value: 'new', text: 'Utwórz nowy plan' }

    ];


    render() {
        return (
            <Dropdown placeholder='Select training' fluid selection options={this.trainingOptions} />
        );
    }
}

export default TrainingSelection;
