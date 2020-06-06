import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./views/login";
import Register from "./views/register";
import Home from "./views/home";

import "./global.css";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/home" component={Home}></Route>
        </Router>
    );
}

export default App;
