import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Welcome To</div>
                        <div className="intro-heading text-uppercase">GBI Taman Mahkota</div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">More from us</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
