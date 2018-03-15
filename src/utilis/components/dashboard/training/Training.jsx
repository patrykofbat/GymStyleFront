import React, {Component} from 'react';
import TrainingMenu from "./TrainingMenu";
import { Grid, Menu, Segment } from 'semantic-ui-react'
import TrainingSelection from "./TrainingSelection";
import ExerciseSelection from "./ExerciseSelection";

class Training extends Component {

    state = {};

    render() {
        return (
            <Grid style={{height: '75vh'}}>
                <Grid.Column stretched  width={8}>
                    <Segment>
                        <h2>Trening</h2>
                        <TrainingSelection/>

                    </Segment>
                </Grid.Column>
                <Grid.Column stretched  width={8}>
                    <Segment>
                        <h2>Cwiczenia</h2>
                        <ExerciseSelection/>

                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Training;
