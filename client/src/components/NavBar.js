import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from '../img/LogoLight.png';
import './style/NavBar.css'
import {isUserLoggedIn} from "../Permissions";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // sessionStorage.clear();
    }

    state = {
        reload: false
    };

    refreshPage = (e) => {
        if (! window.confirm('Are you sure you want to logout?')){
            e.preventDefault();// prevent refresh on click
            return ;
        } 
        localStorage.clear();
        this.setState(
            {reload: true},
            () => this.setState({reload: false})
            )       
    };

    render() {
        return (
            <Navbar bg="dark" className='m-auto' variant="dark">

                <Navbar.Brand href="#home" className="m-auto">
                    <img
                        src={logo}
                        width="300"
                        className="d-inline-block align-top"
                        alt="WorkOut"
                    />
                </Navbar.Brand>

                {isUserLoggedIn() ?
                    <Nav className="mr-auto">
                        <Link className="nav-bar-link" to="/home">Home</Link>
                        <Link className="nav-bar-link" to="/MyWorkouts">My Workouts</Link>
                        <Link className="nav-bar-link" to="/About">About</Link>
                        <Link className="nav-bar-link" to="/" onClick={this.refreshPage}>Logout</Link>
                    </Nav>
                    :
                    <Nav className="mr-auto">
                        <Link className="nav-bar-link" to="/signin">Login</Link>
                        <Link className="nav-bar-link" to="/register">Register</Link>
                    </Nav>
                }

            </Navbar>
        );
    }
}

export default withRouter(NavBar);

