import {Route, Switch, useLocation} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

export default function Routes(props) {
    return (
        <Switch>

            <Route path="/portfolio">
                <Portfolio
                    darkMode={props.darkMode}
                />
            </Route>
            <Route path="/blog">
                {useLocation().pathname}
                Blog
            </Route>
            <Route path="/">
                <Home/>
            </Route>

        </Switch>
    )
}

