const USERS_TABLE = {
    name: "users",
    columns: {
        id: "UserName",
        password: "Password",
        fullName: "FullName",
        birthDay: "Birthday"
    }
}

const WORKOUTS_TABLE = {
    name: "workouts",
    columns: {
        workout_name: "WorkName",
        username: "UserName",
        type: "WorkType",
        time: "WorkDate"
    }
}

module.exports = {
    USERS_TABLE, WORKOUTS_TABLE
}