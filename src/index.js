import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import ProjectContainer from "./components/ProjectContainer";
import NavBar from "./components/NavBar";


ReactDOM.render(
    <React.StrictMode>
        <Router>
        <div>

                <NavBar/>
                <Switch>
                    <Route exact path="/projects" component={withRouter(ProjectContainer)}/>
                    <Route exact path="/about" component={withRouter(About)}/>
                    <Route exact path="/" component={withRouter(App)}/>
                    <Route component={ErrorPage}/>
                </Switch>
        </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
