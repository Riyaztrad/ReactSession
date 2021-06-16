import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {Home, AboutUs} from './screens'

const Navigation = () => {

    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/">
                    <AboutUs />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navigation;