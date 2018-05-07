import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Training from "../dashboard/training/Training";
import PopUp from "./PopUp";

export default class MainContent extends Component {
    state = { activeItem: 'Start',
        popUp:false
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handlePopUp = () => this.setState({popUp:true});
    handlePopUpEsc = () => this.setState({popUp:false});

    render() {
        let { activeItem, popUp } = this.state;

        return (
            <Grid padded style={{height: '80vh'}}>
                <Grid.Column stretched width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='Start' active={activeItem === 'Start'} onClick={this.handleItemClick} />
                        <Menu.Item name='Trening' active={activeItem === 'Trening'} onClick={this.handleItemClick} />
                        <Menu.Item name='Dieta' active={activeItem === 'Dieta'} onClick={this.handleItemClick} />
                        <Menu.Item name='Sylwetka' active={activeItem === 'Sylwetka'} onClick={this.handleItemClick} />
                        <Menu.Item name='Suplementacja' active={activeItem === 'Suplementacja'} onClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        {activeItem === "Start" && <p>{activeItem}</p>}
                        {activeItem === "Trening" && <Training popUp={this.handlePopUp}/>}
                        {activeItem === "Dieta" && <p>{activeItem}</p>}
                        {activeItem === "Sylwetka" && <p>{activeItem}</p>}
                        {activeItem === "Suplementacja" && <p>{activeItem}</p>}
                    </Segment>
                    {popUp === true && <PopUp esc={this.handlePopUpEsc} content={"PopUp"}/>}
                </Grid.Column>
            </Grid>
        )
    }
}


