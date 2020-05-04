import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import Sidenav from './components/Sidenav/index';
import Header from './components/Header/index';
import MainComponent from './components/MainComponent/index';

class App extends Component {
    render() {
        return (

            <div className="main-container">
                <BrowserRouter>
                    <div className="row">
                        <div className="col-md-3">
                            <Sidenav />
                        </div>
                        <div className="col-md-9">
                            <Header />
                            <MainComponent />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
