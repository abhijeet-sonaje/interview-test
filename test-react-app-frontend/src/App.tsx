import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidenav from './components/Sidenav/index';
import Header from './components/Header/index';
import MainComponent from './components/MainComponent/index';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            margin: "200px"
        }
    }

    setMarginToZero() {
        this.setState({
            margin: "0px"
        })
    }

    render() {
        return (
            <div className="main-container">
                <Router>
                    <Sidenav setMarginToZero={this.setMarginToZero.bind(this)} />
                    <div className="main" style={{ marginLeft: this.state.margin }}>
                        <Header name="ABC" />
                        <MainComponent />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
