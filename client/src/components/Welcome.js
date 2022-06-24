import React from 'react'
import {withRouter} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import './style/Welcome.css'
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

