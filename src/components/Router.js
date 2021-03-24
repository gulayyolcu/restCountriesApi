import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Country from './Country';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/country/:callingCodes" component={Country} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

