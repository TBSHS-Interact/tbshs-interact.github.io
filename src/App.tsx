import "./App.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Events from "./Pages/Events";
import Environment from "./Pages/Environment";
import Contact from "./Pages/Contact";

export default class App extends Component {
    public render(): JSX.Element {
        document.title = "TBSHS Interact";
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/News" component={News} />
                    <Route exact path="/Events" component={Events} />
                    <Route exact path="/Environment" component={Environment} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
                <footer style={{ height: "10px" }} />
            </HashRouter>
        );
    }
}
