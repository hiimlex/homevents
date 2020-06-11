import React from "react";
import { FiHome, FiEdit, FiPower, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.png";

import { useDispatch } from "react-redux";

export default function NewEvent() {
    const dispatch = useDispatch();

    function SignOut(e) {
        e.preventDefault();
        dispatch({ type: "LOG_OUT" });
    }
    return (
        <div className="new-event-container">
            <div className="new-event-content">
                <form className="mx-auto">
                    <img src={logo} className="img-fluid" alt="HomEvent" />
                </form>
                <footer className="bottom-nav">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-color fixed-bottom">
                        <ul className="navbar-nav bottom-nav">
                            <li className="nav-item  remove-border">
                                <Link className="nav-link " to="/home">
                                    <FiHome size="24"></FiHome>
                                </Link>
                            </li>
                            <li className="nav-item active remove-border">
                                <Link className="nav-link" to="/events/new">
                                    <FiPlus size="24"></FiPlus>
                                </Link>
                            </li>
                            <li className="nav-item remove-border">
                                <Link className="nav-link">
                                    <FiEdit size="24"></FiEdit>
                                </Link>
                            </li>
                            <li
                                className="nav-item remove-border"
                                onClick={SignOut}
                            >
                                <Link className="nav-link">
                                    <FiPower size="24"></FiPower>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </div>
        </div>
    );
}
