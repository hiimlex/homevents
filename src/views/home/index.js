import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { FiPower, FiHome, FiPlus } from "react-icons/fi";

import "./index.css";

import logo from "../../assets/logo.png";

import { useSelector, useDispatch } from "react-redux";

function Home() {
    const [visible, setVisible] = useState("block");
    const dispatch = useDispatch();

    function SignOut(e) {
        e.preventDefault();
        dispatch({ type: "LOG_OUT" });
    }

    if (useSelector((state) => state.userLogged) > 0) {
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

                    <Link
                        className="nav-link mr-2 remove-border"
                        style={{ fontSize: 20 }}
                    >
                        Lorem ipsum dolor
                    </Link>
                    <button
                        type="button"
                        className="btn btn-lg btn-light remove-border"
                        onClick={SignOut}
                    >
                        <FiPower size={18} />
                    </button>
                </header>
                <footer className="bottom-nav">
                    <nav className="navbar navbar-expa  nd-lg navbar-dark bg-color fixed-bottom">
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

                <div className="my-modal" style={{ display: `${visible}` }}>
                    <div className="my-modal-content">
                        <span
                            className="close"
                            onClick={() => {
                                setVisible("none");
                            }}
                        >
                            &times;
                        </span>

                        <h3 className="h6 font-weight-bold text-center my-2 text-uppercase">
                            Welcome to HomEvent
                        </h3>
                        <hr dataContent="ABOUT" className="hr-text" />
                        <p className="text-justify my-2 mx-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam quasi doloribus optio at enim, quaerat
                            mollitia ipsum laboriosam modi deleniti perspiciatis
                            quis fugit expedita nostrum facilis nihil quidem sit
                            ex. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Illo, maiores! Rem, dolorum
                            eligendi temporibus mollitia explicabo ipsum sed,
                            odio adipisci dolores dignissimos tenetur a
                            voluptatem, aperiam minus atque! Molestias,
                            incidunt.
                        </p>
                    </div>
                </div>
            </div>
        );
    } else return <Redirect to="/"></Redirect>;
}

export default Home;
