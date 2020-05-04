import React, { Component } from 'react';

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
                                Integration
                            </div>
                        </div>
                        <div className="row sidenav-items">
                            <div className="col-md">
                                Analytics
                            </div>
                        </div>
                        <div className="row sidenav-items">
                            <div className="col-md">
                                Reports
                            </div>
                        </div>
                        <hr />
                        <div className="row sidenav-items">
                            <div className="col-md">
                                Insights
                            </div>
                        </div>
                        <div className="row sidenav-items">
                            <div className="col-md">
                                Contact US
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
