import React from 'react';
import {withRouter} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import WorkoutTableOfUser from "./WorkoutTableOfUser";
import WorkoutDistributionGraph from "./WorkoutDistributionGraph";


class MyWorkouts extends React.Component {
    constructor(props) {
        super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = {
            responseData: null
        }
    }

    componentDidMount = async () => {
        const setState = this.setState.bind(this);
        console.log(localStorage.getItem('User'));
        let userDetails = JSON.parse(localStorage.getItem('User'));
        const requestMsg = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    ID: userDetails.username,
                    Password: userDetails.Password
                })
        };

        await fetch('/getUserWorkouts', requestMsg)
            .then((res) => res.json())
            .then(function (response) {
                setState({responseData: response})
            });
    };


    render() {
        return (
            <container>
<div className="MyWorkouts" >
                <center>
                    <Card className="col-lg-8 col-12 p-0">
                        <Card.Body>
                            <Card.Title><h2>My Workouts <a style={{color:'black'}} href='#AddWorkout' ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></a></h2></Card.Title>
                            

                            {this.state.responseData === null ?
                                <div>Loading</div>
                                :
                                Object.keys(this.state.responseData).length === 0 ?
                                    <div>No Available Workouts</div>
                                    :
                                    <div>
                                        <div>{<WorkoutTableOfUser tableData={this.state.responseData}/>}</div>
                                        <div>{<WorkoutDistributionGraph tableData={this.state.responseData}/>}</div>
                                    </div>
                            }
                        </Card.Body>
                    </Card>
                </center>
            </div>
            </container>
            
        )
    }
}


export default withRouter(MyWorkouts);
