import React, { Component } from 'react';

import "./index.scss";

export default class Itegration extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            ApiArray: [{
                id: 1
            }, {
                id: 2
            }, {
                id: 3
            }, {
                id: 4
            }, {
                id: 5
            }, {
                id: 6
            }, {
                id: 7
            }, {
                id: 8
            }, {
                id: 9
            }, {
                id: 10
            }, {
                id: 11
            }, {
                id: 12
            }]
        }

        window.onscroll = this.infiniteScroll.bind(this);
    }

    infiniteScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
        ) {
            const arrayLength: number = this.state.ApiArray.length;
            const apiArray = this.state.ApiArray;
            for (let i = 1; i <= 9; i++) {
                apiArray.push({ id: arrayLength + i });
            }
            this.setState({ ApiArray: apiArray });
        }
    }

    fetchServerResponse(id: any) {
        fetch('https://jsonplaceholder.typicode.com/todos/' + id)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
            });
    }

    public render() {
        return (

            <div className="row integration">
                {this.state.ApiArray.map((Api: any) =>
                    <div key={Api.id} className="col-md-4" onClick={(e) => { this.fetchServerResponse(Api.id) }}>
                        <div className="card">
                            <div className="card-body">
                                <h3>API {Api.id}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
