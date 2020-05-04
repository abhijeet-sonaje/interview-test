import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Integration from './Integration/index';
import Analytics from './Analytics/index';
import Reports from './Reports/index';
import Insights from './Insights/index';
import ContactUs from './ContactUs/index';
import Welcome from './Welcome/index';

export default class App extends Component<any, any> {
    public render() {
        return (
            <div className="row">
                <div className="col-md col-sm">
                    <Switch>
                        <Route path="/integration">
                            <Integration />
                        </Route>
                        <Route path="/analytics">
                            <Analytics />
                        </Route>
                        <Route path="/reports">
                            <Reports />
                        </Route>
                        <Route path="/insights">
                            <Insights />
                        </Route>
                        <Route path="/contactus">
                            <ContactUs />
                        </Route>
                        <Route path="/">
                            <Welcome />
                        </Route>
                    </Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/" />
                    )} />
                </div>
            </div>
        );
    }
}
