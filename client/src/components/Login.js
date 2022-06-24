import React from 'react'
import {withRouter} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ID: '',
            FullName: '',
            password: ''
        }
    }

    componentDidMount = async () => {
    };


    loginUser = async () => {
        const requestMsg = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    title: 'Login',
                    ID: this.state.ID,
                    Password: this.state.password,
                })
        };
        console.log("requesting");

        const response = await fetch('/login', requestMsg);

        if (!response.ok) {
            alert('Invalid Login Details');
            return;
        }
        let responseData = await response.json();
        responseData = JSON.parse(responseData.body);
        console.log(responseData)

        localStorage.setItem(
            'User',
            JSON.stringify({
                username: this.state.ID,
                fullName: responseData.fullName,
            }));


        return (this.props.history.push('/home'));
    };

    render() {
        return (
            <Card style={{flex: 1, background: 'rgba(233, 235, 236, 0.6)', borderRadius: 20}}>
                <Card.Body>
                    <div>
                        <center><h1 style={{fontFamily: 'Merriweather Sans, sans-serif'}}>Login</h1></center>
                        <div>
                            <center><Form>
                                <Form.Group controlId="fID">
                                <Form.Label><b>Username</b></Form.Label>
                                    <Form.Control
                                        placeholder="Your Username"
                                        value={this.state.ID}
                                        onChange={e => this.setState({ID: e.target.value})}
                                        required/>
                                </Form.Group>

                                <Form.Group controlId="fPassword">
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={e => this.setState({password: e.target.value})}
                                        required/>
                                </Form.Group>
                                <Button onClick={this.loginUser}>Login</Button>
                            </Form></center>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            
        );
    }
}

export default withRouter(Login);
