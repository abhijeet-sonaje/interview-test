import React, { Component } from 'react';


export default class App extends Component<any> {
    public render() {
        return (
            <div className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                    Hi, Dear {this.props.name} User
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                    Logo
                </div>
            </div>
        );
    }
}
