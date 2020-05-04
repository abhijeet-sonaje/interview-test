import React, { Component } from 'react';

import "./index.scss";
import { Link } from "react-router-dom";
import MenuLogo from "./../../menu.svg";
import MenuBlackLogo from "./../../menu-black.svg";
import UserLogo from "./../../user.svg";

export interface IAppProps {
    setMarginToZero: Function,
    resetMargin: Function
}
export default class App extends Component<IAppProps, any> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            width: "200px",
            selectedLink: ""
        };
    }

    hideSidebar() {
        this.setState({
            width: "0px"
        });
        this.props.setMarginToZero();
    }

    openSidebar() {
        this.setState({
            width: "200px"
        });
        this.props.resetMargin();
    }

    setLinkToActive(link: any) {
        this.setState({
            selectedLink: link
        });
    }

    public render() {
        return (
            <div>
                <div className="row sidebar full-height" style={{ width: this.state.width }}>
                    <div className="col-md">
                        <div className="row ">
                            <div className="col-md text-right">
                                <img className="menu-logo" onClick={(e) => { this.hideSidebar(); }} src={MenuLogo} alt="Menu Icon" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md text-center">
                                <img className="user-logo" src={UserLogo} alt="User Icon" />
                            </div>
                        </div>
                        <hr />
                        <div className={"row sidenav-items" + (this.state.selectedLink === "integration" ? " active" : "")}>
                            <div className="col-md">
                                <Link to="/integration" onClick={(e) => { this.setLinkToActive("integration"); }}>Integration</Link>
                            </div>
                        </div>
                        <div className={"row sidenav-items" + (this.state.selectedLink === "analytics" ? " active" : "")}>
                            <div className="col-md">
                                <Link to="/analytics" onClick={(e) => { this.setLinkToActive("analytics"); }}>Analytics</Link>
                            </div>
                        </div>
                        <div className={"row sidenav-items" + (this.state.selectedLink === "reports" ? " active" : "")}>
                            <div className="col-md">
                                <Link to="/reports" onClick={(e) => { this.setLinkToActive("reports"); }}>Reports</Link>
                            </div>
                        </div>
                        <hr />
                        <div className={"row sidenav-items" + (this.state.selectedLink === "insights" ? " active" : "")}>
                            <div className="col-md">
                                <Link to="/insights" onClick={(e) => { this.setLinkToActive("insights"); }}>Insights</Link>
                            </div>
                        </div>
                        <div className={"row sidenav-items" + (this.state.selectedLink === "contactus" ? " active" : "")}>
                            <div className="col-md">
                                <Link to="/contactus" onClick={(e) => { this.setLinkToActive("contactus"); }}>Contact US</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.width === "0px" ?
                        <div className="menu-open-logo">
                            <img className="menu-logo" onClick={(e) => { this.openSidebar(); }} src={MenuBlackLogo} alt="Menu Icon" />
                        </div>
                        : <div></div>
                }
            </div>
        );
    }
}
