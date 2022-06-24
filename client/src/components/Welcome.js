import React, {Component as Navbar} from 'react'
import {withRouter} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import './style/Welcome.css'
import About from './About';
import Home from './Home';




class Welcome extends React.Component {
    constructor(props) {
        super(props);
        localStorage.clear();
    }
    componentDidMount() {
        localStorage.clear();
    }

    render() {
        return (
            <div >
                <Container >
                    <Container style={{marginTop: '1rem', textAlign: 'left'}}>
                       <Home />
                    </Container>
                </Container>
            </div>
        );
    }
}
export default withRouter(Welcome);

