import React, { Component } from 'react';

import { Link } from "react-router-dom";

export default class App extends Component {
    public render() {
        return (
            <div>
                <div className="row full-height">
                    <div className="col-md">
                        <div className="row sidenav-items">
                            <div className="col-md">
                                User Image
                            </div>
                        </div>
                        <hr />
                        <div className="row sidenav-items">
                            <div className="col-md">
                                <Link to="/integration">Integration</Link>
                            </div>
                        </div>
                        <div className="row sidenav-items">
                            <div className="col-md">
                                <Link to="/analytics">Analytics</Link>
                            </div>
                        </div>
                        <div className="row sidenav-items">
                            <div className="col-md">
                                <Link to="/reports">Reports</Link>
                            </div>
                        </div>
                        <hr />
                        <div className="row sidenav-items">
                            <div className="col-md">
                                <Link to="/insights">Insights</Link>
                            </div>
                        </div>
                        <div className="row sidenav-items">
                            <div className="col-md">
                                <Link to="/contactus">Contact US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
