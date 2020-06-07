import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiHome, FiPlus } from "react-icons/fi";

import "./index.css";

import logo from "../../assets/logo.png";

function Home() {
    return (
        <div className="home-container">
            <header>
                <img
                    src={logo}
                    alt="HomEvent"
                    className="img-fluid"
                    style={{
                        width: 220,
                        height: "auto",
                        display: "flex",
                        alignSelf: "center",
                    }}
                />
                <span className="text-white mx-5">Bem vindo(a), Alex</span>

                <Link
                    className="nav-link mr-2 remove-border"
                    style={{ fontSize: 20 }}
                >
                    Lorem ipsum dolor
                </Link>
                <button
                    type="button"
                    className="btn btn-lg btn-light remove-border"
                >
                    <FiPower size={18} />
                </button>
            </header>
            <footer className="bottom-nav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-color fixed-bottom">
                    <ul className="navbar-nav bottom-nav">
                        <li className="nav-item active remove-border">
                            <Link className="nav-link " to="/home">
                                <FiHome size="24"></FiHome>
                            </Link>
                        </li>
                        <li className="nav-item remove-border">
                            <Link className="nav-link">
                                <FiPlus size="24"></FiPlus>
                            </Link>
                        </li>
                        <li className="nav-item remove-border">
                            <Link className="nav-link">
                                <FiPower size="24"></FiPower>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default Home;
