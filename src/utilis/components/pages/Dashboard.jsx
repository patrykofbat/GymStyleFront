import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import HeaderBar from "../common/HeaderBar";
import MainContent from "../common/MainContent";


class Dashboard extends Component {

    
    render() {
        return (
            <Container fluid={true}>
                <HeaderBar/>
                <MainContent/>
            </Container>
        );
    }
}

export default Dashboard;