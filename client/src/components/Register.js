import React from 'react'
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            password: '',
            username: '',
            birthday: ''
        };
    }


    registration = async (e) => {
        e.preventDefault();
        let username = this.state.username;
        let FullName = this.state.FullName;
        let password = this.state.password;
        let Birthday = new Date(this.state.birthday);

        /* FullName and password sanity check*/

        if (FullName === "" || password === "") {
            alert("You must enter FullName and password");
            return;
        }
        let english = /^[A-Za-z0-9_ ]+$/;
        if (!english.test(FullName)) {
            alert("FullName must be in english letters.");
            return;
        }
        if (!english.test(username)) {
            alert("Username must be in english letters.");
            return;
        }
        if (password.length <= 1) {
            alert("Password must be greater then 1");
            return;
        }

        // validate birthday - user 18+
        var ageDifMs = Date.now() - Birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        if( Math.abs(ageDate.getUTCFullYear() - 1970) < 18){
            alert("The age must be greater than 18!");
            return;
        }
        

        /**
         * You first need to create a formatting function to pad numbers to two digits…
         **/
        function twoDigits(d) {
            if(0 <= d && d < 10) return "0" + d.toString();
            if(-10 < d && d < 0) return "-0" + (-1*d).toString();
            return d.toString();
        }

         function toMysqlFormat(d) {
            return d.getUTCFullYear() + "-" + twoDigits(1 + d.getUTCMonth()) + "-" + twoDigits(d.getUTCDate()) + " " + twoDigits(d.getUTCHours()) + ":" + twoDigits(d.getUTCMinutes()) + ":" + twoDigits(d.getUTCSeconds());
        };

        const requestMsg = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: 'Register',
                    username: this.state.username,
                    fullname: this.state.FullName,
                    password: this.state.password,
                    bd: toMysqlFormat(Birthday)
                })
        };

        console.log("requesting");

        const response = await fetch('/register', requestMsg)
        console.log(response);
        if (!response.ok) {
            alert('Invalid Registration Details');
            return;
        }
        const responseData = await response.json();
        console.log(responseData);
        alert('Registered! Please login.')

    };

    render() {

        return (
            <Card style={{background: 'rgba(233, 235, 236, 0.6)', borderRadius: 20}}>
            <Card.Body>
                
            <div>
                <center><h1 style={{fontFamily: 'Merriweather Sans, sans-serif'}}>Register</h1></center>
                    <div>
                        <center><Form onSubmit={this.registration}>
                            <Form.Group controlId="fusername">
                                <Form.Label><b>Username</b></Form.Label>
                                <Form.Control
                                    placeholder="Your Username"
                                    value={this.state.username}
                                    onChange={e => this.setState({username: e.target.value})}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="fFullName">
                                <Form.Label><b>FullName</b></Form.Label>
                                <Form.Control
                                    placeholder="Your Full Name"
                                    value={this.state.FullName}
                                    onChange={e => this.setState({FullName: e.target.value})}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="fPassword">
                                <Form.Label><b>Password</b></Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    required />
                            </Form.Group>
                            <Form.Group controlId="fBirthday">
                                <Form.Label><b>Birthday</b></Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Your Birthday"
                                    value={this.state.birthday}
                                    onChange={e => this.setState({ birthday: e.target.value })}
                                    required />
                            </Form.Group>
                            <Button type="submit" id='registerBtn'> Register </Button>

                        </Form></center>
                    </div>
                </div>
            </Card.Body>
            </Card>

        );
    }
}


export default withRouter(Register);
