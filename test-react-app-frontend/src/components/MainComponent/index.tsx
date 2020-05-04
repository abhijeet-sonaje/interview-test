import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Integration from './Integration/index';
import Analytics from './Analytics/index';
import Reports from './Reports/index';
import Insights from './Insights/index';
import ContactUs from './ContactUs/index';

export default class App extends Component<any, any> {
    public render() {
        return (
            <div className="row main-component-height">
                <div className="col-md col-sm">
                    MainComponent
                    <Switch>
                        <Route path="/analytics">
                            <Analytics />
                            <Route path="/integration">
                                <Integration />
                            </Route>
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
                    </Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/integration" />
                    )} />
                </div>
            </div>
        );
    }
}
