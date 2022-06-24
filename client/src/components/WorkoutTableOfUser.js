import React from "react";
import Table from "react-bootstrap/Table";


class WorkoutTableOfUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableData: props.tableData};
    };



    renderWorkouts(col, idx) {
        return (
            <tr key={idx}>
                <td>{col.WorkName}</td>
                <td>{col.WorkType}</td>
                <td>{col.WorkDate.replace('T',' ')}</td>
                <td><button onClick={async ()=>{
                    await fetch('/deleteUserWorkout', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            username:      col.UserName,
                            workname:      col.WorkName,
                            workdate:      col.WorkDate,
                        })
                    })
                   window.location.reload(false)
                }}>DELETE</button></td>
            </tr>
        )
    };

    
    render() {
        return (
            <div>
                <Table striped bordered hover responsive="md" >
                    <thead>
                        <tr>
                            <td><b>Workout Name</b></td>
                            <td><b>Workout Type</b></td>
                            <td><b>Workout Time</b></td>
                            <td><b>DELETE</b></td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.tableData.map(this.renderWorkouts)}
                    </tbody>
                </Table>
            </div>
        );
    }


}


export default WorkoutTableOfUser;
