import {Route, Switch} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";
import Home from "../pages/Home";

export default function Routes(props) {
    return (
        <Switch>
            <Route path="/about">
                About
            </Route>
            <Route path="/blog">
                Blog
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

