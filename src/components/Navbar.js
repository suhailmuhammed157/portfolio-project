import React from "react";
// import logo from "../logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
            <div className="container">
                <a className="navbar-brand logo" href="#">
                    <h3>SUHAIL</h3>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                works
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                contact
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
