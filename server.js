const mysql = require('mysql')
const path = require('path')
const express = require('express')
const { USERS_TABLE, WORKOUTS_TABLE } = require('./client/src/DatabaseTables')
const app = express()
const port = 8081
app.use(express.json())
app.use(express.static(path.resolve(__dirname, './client/build'))); // Have Node serve the files for our built React app

app.use((req,res,next)=>{ // from every request from the client first do this
    console.log(`Handling request , ${req.method} , ${req.url} ,body:`);
    console.log(req.body)
    next() // continue in pipeline
})

var db_config = {
    host: "remotemysql.com",
    user: "tbuATO0ZYa",
    password: "nUZQNkJaO4",
    database: "tbuATO0ZYa",
    insecureAuth: true
}

// var db_config = {
//     host: "localhost",
//     port: 3306,
//     user: "user",
//     password: "user",
//     database: "web_project",
// }


var databaseConnection

// Create connection to mySql
function handleDisconnect() {
    databaseConnection = mysql.createConnection(db_config)

    // The server is either down or restarting (takes a while sometimes).
    databaseConnection.connect((err) => {
        if (err) {
            console.log('error when connecting to db:', err);
            // We introduce a delay before attempting to reconnect, to avoid a hot loop, and to allow our node script to process asynchronous requests in the meantime.
            // If you're also serving http, display a 503 error.
            setTimeout(handleDisconnect, 2000);
        }
    });

    databaseConnection.on('error', (err) => { // sign a function to error event
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
            // Connection to the MySQL server is usually lost due to either server restart, 
            // or a connnection idle timeout (the wait_timeout server variable configures this)
            handleDisconnect();
        } else {
            throw err;
        }
    });
}
handleDisconnect();


function getTable(tableName, res) {
    console.log(`GET table ${tableName}`)

    res.header('Access-Control-Allow-Origin', '*')
    var query = `SELECT * FROM ${tableName}`
    databaseConnection.query(query, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

// if request / return index.html
app.get(`/`, (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));    
})

app.get(`/${USERS_TABLE.name}`, (req, res) => {
    getTable(USERS_TABLE.name, res)
})

app.get(`/${WORKOUTS_TABLE.name}`, (req, res) => {
    getTable(WORKOUTS_TABLE.name, res)
})

// return workouts table to specific user
app.post('/getUserWorkouts', (req, res) => {
    const query = `SELECT * FROM ${WORKOUTS_TABLE.name} WHERE ${WORKOUTS_TABLE.columns.username} = ?`
    databaseConnection.query(query, req.body.ID, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.post('/addWorkout', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    const sql = `INSERT INTO ${WORKOUTS_TABLE.name} VALUES ('${req.body.username}', '${req.body.name}', '${req.body.work_type}','${req.body.time}')`
    databaseConnection.query(sql, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.post('/deleteUserWorkout', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    const query = `Delete FROM ${WORKOUTS_TABLE.name} WHERE ${WORKOUTS_TABLE.columns.username} = ? AND ${WORKOUTS_TABLE.columns.workout_name} = ? AND ${WORKOUTS_TABLE.columns.time} = ?`
    databaseConnection.query(query, [req.body.username, req.body.workname,req.body.workdate], (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.post('/login', (req, res) => {
    console.log("POST login")
    if (req.body.title !== "Login") {
        res.status(400)
        res.send("Bad Login Request.")
        return
    }

    const query = `SELECT * FROM ${USERS_TABLE.name} WHERE ${USERS_TABLE.columns.id} = ? AND ${USERS_TABLE.columns.password} = ?`
    databaseConnection.query(query, [req.body.ID, req.body.Password],
        (err, result) => {
            if (err) {
                res.status(500)//Internal server error
                res.send(err)
                return
            }

            if (result.length === 0) {
                res.status(400)//bad request
                res.send("Invalid login parameters.")
                return
            }

            const resMsg = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        title: 'Login',
                        loginResult: 'OK',
                        username: result[0].UserName,
                        fullName: result[0].FullName,
                    })
            }

            res.type('application/json')
            res.send(resMsg)
        })
})

app.post('/register', (req, res) => {
    console.log("POST register")

    if (req.body.title !== "Register") {
        res.status(400)
        res.send("Bad Request.")
        return
    }

    /* Check if user already exist */
    const query = `SELECT * FROM ${USERS_TABLE.name} WHERE ${USERS_TABLE.columns.id} = ?`
    databaseConnection.query(query, [req.body.username],
        (err, result) => {
            if (err) {
                res.status(500)
                res.send(err)
                return
            }
            if (result.length !== 0) {
                res.status(400)
                res.send("Username already exists")
                return
            }

            /* Insert new user */
            var query = `INSERT INTO ${USERS_TABLE.name} VALUES ('${req.body.username}','${req.body.password}', '${req.body.fullname}', '${req.body.bd}')`
            console.log(query)
            databaseConnection.query(query,
                (err, result) => {
                    if (err) {
                        res.status(500)
                        res.send(err)
                        throw err
                    }

                    if (result.length === 0) {
                        res.status(400)
                        res.send("Invalid login parameters.")
                        return
                    }

                    const resMsg = {
                        method: 'GET',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(
                            {
                                title: 'Register',
                                RegistrationResult: 'OK',
                            })
                    }

                    res.type('application/json')
                    res.send(resMsg)
                })
        })
})

// app.post('/getUserType', (req, res) => {
//     console.log(`POST getUser ${req.body}`)

//     if (req.body.ID === "" || req.body.Password === "") {
//         res.status(400)
//         res.send("Invalid User parameters.")
//         return
//     }

//     const query = `SELECT * FROM ${USERS_TABLE.name} WHERE ${USERS_TABLE.columns.id} = ? AND ${USERS_TABLE.columns.password} = ?`
//     databaseConnection.query(query, [req.body.ID, req.body.Password],
//         (err, result) => {
//             if (err) {
//                 res.status(500)
//                 res.send(err)
//                 return
//             }

//             console.log(result.length === 0)
//             if (result.length === 0) {
//                 res.status(400)
//                 res.send("Invalid User parameters.")
//                 return
//             }

//             const resMsg = {
//                 method: 'GET',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify(
//                     {
//                         title: 'UserDetails',
//                         loginResult: 'OK',
//                     })
//             }
//             console.log(resMsg)
//             res.type('application/json')
//             res.send(resMsg)
//         })
// })

app.listen(port, () => {
    console.log(`Workouts-app server listening on http://localhost:${port}`)
})