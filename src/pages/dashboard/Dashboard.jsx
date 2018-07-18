import React, {Component} from 'react';
import { Grid, Menu, Segment, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import HeaderBar from "../../components/common/HeaderBar";
import PopUp from "../../components/common/PopUp";
import Training from "./training/Training";


class Dashboard extends Component {

    state = { activeItem: 'Start',
        popUp:false,
        link:"",
        title:""
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handlePopUp = (link, title) => this.setState({popUp:true, link, title});
    handlePopUpEsc = () => this.setState({popUp:false});

    
    render() {
        let { activeItem, popUp, link, title} = this.state;
        return (
            <Container fluid={true}>
                <HeaderBar/>
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
                    {popUp === true && <PopUp title={title} link={link} esc={this.handlePopUpEsc} content={"PopUp"}/>}
                </Grid.Column>
            </Grid>
                
            </Container>
        );
    }
}

export default Dashboard;