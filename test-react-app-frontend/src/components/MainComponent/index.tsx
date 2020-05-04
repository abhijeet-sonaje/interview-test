import React, { Component } from 'react';

export default class App extends Component<any, any> {
    public render() {
        return (
            <div className="row main-component-height">
                <div className="col-md col-sm">
                    MainComponent {this.props.name}
                </div>
            </div>
        );
    }
}
