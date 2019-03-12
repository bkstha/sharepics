import React from "react";
import SearchBar from "./SearchBar";
import "../style/header.css"

class Header extends React.Component {
    render() {
        return (
            <div className="header clearfix">
                <div className="logo">
                    <img src="assets/images/logo.png" alt="share pic logo"></img>
                </div>
                <div className="search-wrapper">
                    <SearchBar />
                </div> 
                <div className="header-links">
                    <ul>
                        <li>
                            Know About Us
                        </li>
                        <li>
                            <span className="btn btn-login">
                             Login
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;

