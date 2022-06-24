import React from "react";
import Card from "react-bootstrap/Card";
import { isUserLoggedIn } from "../Permissions";
import Welcome from "./Welcome";

export default function Home() {
          
    
    return (
        <div>
            <center>
                <Card style={{width: '90%' , marginTop: '1rem',background: 'rgba(233, 235, 236, 0.9)'}} >
                    <Card.Body>
                           <h1><b>Welcome {JSON.parse(localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')).fullName : "guest"}!</b></h1>
                    </Card.Body>
                </Card>
                <br/>
                <Card style={{width: '80%',background: 'rgba(229, 200, 195, 0.9)'}}>
                    <Card.Body>
                        <Card.Title><h2>Excercise with us!</h2></Card.Title>
                        <div>This website is your workout calender! <br></br> Here you can save every workout you did and compare it with previous ones.
                            <br></br>And the best part- it's FREE!!!</div>
                    </Card.Body>
                </Card>
                <br/>
                <Card style={{width: '80%',background: 'rgba(255, 200, 150, 0.9)'}}>
                    <Card.Body>
                        <Card.Title><h2>Contact us!</h2></Card.Title>
                        <div>If you have any technical issues with your account, please send us an email to: workoutCal@gmail.com</div>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )
}