import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development and website promotion</h1>
                <ReactTypingEffect className="typing-text" text={["Web design", "Web Development"]} speed="150" eraseSpeed="100" eraseDelay="50" />
                <a href="#" className="contact-me-btn" >Contact Me</a>
            </div>
        </div>
    )
}

export default Header;
