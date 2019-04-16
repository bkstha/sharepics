import React from "react";
import SearchBar from "./SearchBar";
import "../style/header.css"
import GoogleAuth from "../auth/GoogleAuth";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Header extends React.Component {

    renderUploadImageBtn = () => {
        if (this.props.isSignedIn) {
            return (
                <NavLink to={"/image-upload"}>
                    <button className="btn btn-info">Upload Image</button>
                </NavLink>
            )
        }
    };

    render() {
        return (
            <div className="header clearfix">
                <div className="logo">
                    <NavLink to={"/"}>
                        <img src="assets/images/logo.png" alt="share pic logo"/>
                    </NavLink>
                </div>
                <div className="search-wrapper">
                    <SearchBar/>
                </div>
                <div className="header-links">
                    <ul>
                        <li>
                            {this.renderUploadImageBtn()}
                        </li>
                        <li>
                            Know About Us
                        </li>
                        <li>
                            <GoogleAuth/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(
    mapStateToProps, {}
)(Header);

