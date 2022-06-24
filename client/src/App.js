import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddWorkout from './components/AddWorkout'
import MyWorkouts from "./components/MyWorkouts";
import About from "./components/About";
import background from "./img/background.jpg"
import Register from './components/Register';
import Login from './components/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
        sessionStorage.clear();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App" style={{
                backgroundImage:`url(${background})`,
                minHeight: "100vh",
                backgroundPosition: "center",
                backgroundSize: "cover"
                }}>

                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather+Sans:ital,wght@1,500&display=swap" rel="stylesheet" />

                <Router>
                    <NavBar />
                    {/* <img src={background} style={{ position: 'absolute', width: '100vw', height: '100vh', repeat: 'no-repeat', left: 0, top: 0, bottom: 0, right: 0, zIndex: -1 }} /> */}

                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/home">
                            <div>
                                <Home />
                            </div>
                        </Route>
                            <Route path="/AddWorkout" component={AddWorkout} />
                            <Route path="/MyWorkouts" component={MyWorkouts} />
                            <Route path="/About" component={About} />
                            <Route path="/register" component={Register} />
                            <Route path="/signin" component={Login} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default App;

