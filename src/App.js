import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Login from "./views/login";
import Register from "./views/register";
import Home from "./views/home";
import Recover from "./views/recover";

import "./global.css";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/recover" component={Recover}></Route>
            </Router>
        </Provider>
    );
}

export default App;
