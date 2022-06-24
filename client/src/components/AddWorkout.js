import React from 'react';
import {withRouter} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class AddWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "cardio",
            time: "",

        }
    }

    // post the given workout to the database
    postWorkout = async (workout = {}) => {
        const response = await fetch('/addWorkout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(workout)
        })
        return await response.json()
    }

    onSaveButtonClicked = async () => {
        if (!this.state.name)           return alert("Error: Please insert Workout name")
        if (!this.state.type)           return alert("Error: Please insert Workout type")
        if (!this.state.time)         return alert("Error: Please insert Workout time")
      
        let userDetails = JSON.parse(localStorage.getItem('User'));
        this.postWorkout({
            username:       userDetails.username,
            name:           this.state.name,
            work_type:      this.state.type,
            time:           this.state.time,
        })

        return (
            this.props.history.push('/MyWorkouts')
        )
    };

    render() {
        
        return (
            <div className="base-container container" ref={this.props.containerRef}>
                <center>
                    <Card className="col-lg-8 col-12 p-0" style={{ marginTop: '8rem', background: 'rgba(233, 235, 236, 0.9)'}}>

                    <h1 id='loginTitle'><b>Add new Workout</b></h1>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="name">Workout Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input id="name" type="text" name="name" placeholder="Workout Name" value={this.state.name} onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    })
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Workout Type:&nbsp;&nbsp;</label>
                                <select  name="type" placeholder="Workout type" value={this.state.type} onChange={(event) => {
                                    this.setState({
                                        type: event.target.value
                                    })
                                }}>
                                    <option>cardio</option>
                                    <option>whights</option>
                                    <option>basketball</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Time:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input type="datetime-local" name="time" placeholder="Workout Time" value={this.state.time} onChange={(event) => {
                                    this.setState({
                                        time: event.target.value
                                    })
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <Button type="button" className="btn"
                                onClick={this.onSaveButtonClicked}>
                            Save
                        </Button>
                    </div>
                    </Card>

                </center>
            </div>
        );

    }

}

export default withRouter(AddWorkout);
