import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { FiPower, FiHome, FiPlus, FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";

import logo from "../../assets/logo.png";

import Card from "../../components/card";

import firebase from "../../config/firebase";

function Home() {
    const [events, setEvents] = useState([]);
    let list = [];

    const dispatch = useDispatch();
    const commom = useSelector((state) => state.firstTime);

    useEffect(() => {
        firebase
            .firestore()
            .collection("events")
            .get()
            .then(async (res) => {
                await res.docs.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });

                setEvents(list);
            });
    });

    function SignOut(e) {
        e.preventDefault();
        dispatch({ type: "LOG_OUT" });
    }

    function CommomUser(e) {
        e.preventDefault();
        if (commom > 0) {
            dispatch({ type: "COMMOM_USER" });
        }
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
                    <div className="menu">
                        <Link
                            className="nav-link remove-border"
                            style={{ fontSize: 18 }}
                            to="/events/new"
                        >
                            Add Event
                        </Link>
                        <Link
                            className="nav-link remove-border"
                            style={{ fontSize: 18 }}
                        >
                            My Events
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="btn btn-lg btn-light remove-border"
                        onClick={SignOut}
                    >
                        <FiPower />
                    </button>
                </header>

                <div className="card-deck my-4">
                    {events.map((i) => (
                        <Card
                            key={i.id}
                            id={i.id}
                            img={i.picture}
                            title={i.title}
                            description={i.description}
                            views={i.views}
                        ></Card>
                    ))}
                </div>

                <footer className="bottom-nav">
                    <nav className="navbar  navbar-dark bg-color fixed-bottom">
                        <ul className="navbar-nav bottom-nav">
                            <li className="nav-item active remove-border">
                                <Link className="nav-link " to="/home">
                                    <FiHome size="24"></FiHome>
                                </Link>
                            </li>
                            <li className="nav-item remove-border">
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
                {commom > 0 ? (
                    <div className="my-modal" style={{ display: "block" }}>
                        <div
                            className="my-modal-content"
                            style={{ borderRadius: 4 }}
                        >
                            <span className="close" onClick={CommomUser}>
                                &times;
                            </span>

                            <h3 className="h6 font-weight-bold text-center my-2 text-uppercase">
                                Welcome to HomEvent
                            </h3>
                            <hr dataContent="ABOUT" className="hr-text" />
                            <p className="text-justify my-2 mx-1">
                                HomEvent is a platform to unify and connect
                                persons, the objective is only provides to you a
                                way to share your activities at home and find
                                some partners, or join to other events around
                                you. HomEvent the best way to meet other persons
                                and who know's the love of your life.
                            </p>
                            <p className="my-2 mx-1">Remember #StayInHome</p>
                            <p className="my-2 mx-1">
                                Developed and designed by Alex. Mail:
                                alex.adaumi@gmail.com
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    } else return <Redirect to="/"></Redirect>;
}

export default Home;
