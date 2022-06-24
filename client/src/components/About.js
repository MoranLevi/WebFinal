import React from "react";
import Card from "react-bootstrap/Card";


export default function About() {
    return (
        <div>
            <center>
                <Card style={{width: '90%' , marginTop: '3rem', background: 'rgba(192, 192, 192, 1)'}} >
                    <Card.Body>
                        <h4><b>Ort Braude - Web Course 2022</b></h4>
                        <h3>Website to manage your workouts</h3>
                        Submited by:
                        Avri Zaguri, Ziv Tziyonit and Moran Levi
                    </Card.Body>
                </Card>
                <Card style={{width: '90%' , marginTop: '3rem', background: 'rgba(192, 192, 192, 1)'}} >
                    <Card.Body>
                    <h4><b>Why we chose to create this website?</b></h4>
                        We created this website in order to help a lot of people to manage their daily workouts and see their results change
                    </Card.Body>
                </Card>
            </center>
        </div>
    )
}
