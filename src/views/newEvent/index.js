import React, { useState } from "react";
import {
    FiHome,
    FiEdit,
    FiPower,
    FiPlus,
    FiPlay,
    FiMenu,
    FiInfo,
    FiType,
    FiCamera,
    FiCalendar,
    FiWatch,
    FiEdit2,
} from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.png";

import { useDispatch, useSelector } from "react-redux";

export default function NewEvent() {
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [other, setOther] = useState();
    const [description, setDescription] = useState();
    const [picture, setPicture] = useState([]);
    const [loading, setLoading] = useState();
    const [msg, setMsg] = useState("Y");
    const dispatch = useDispatch();

    function SignOut(e) {
        e.preventDefault();
        dispatch({ type: "LOG_OUT" });
    }
    if (useSelector((state) => state.userLogged) > 0) {
        return (
            <div className="new-event-container">
                <div className="new-event-content">
                    <form className="mx-auto text-center">
                        <Link to="/home" className="remove-border shadow-none">
                            <img
                                src={logo}
                                className="img-fluid"
                                alt="HomEvent"
                            />
                        </Link>
                        <div className="text-center my-4">
                            <h1 className="h4 font-weight-bold text-white">
                                Share what you'll do!
                            </h1>
                        </div>
                        <div className="icon-input">
                            <FiPlay size="20" className="mr-2"></FiPlay>
                            <input
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                type="email"
                                className="form-control my-2 remove-border shadow-none"
                                placeholder="Title"
                            />
                        </div>
                        <div className="icon-input">
                            <FiMenu size="20" className="mr-2"></FiMenu>
                            <select
                                onChange={(e) => {
                                    setType(e.target.value);
                                }}
                                className="form-control my-2 remove-border shadow-none"
                                placeholder="Title"
                            >
                                <option disabled selected value>
                                    Select the type
                                </option>
                                <option>Yoga</option>
                                <option>Gaming</option>
                                <option>Music</option>
                                <option>Gym</option>
                                <option>HomeWork</option>
                                <option>Chess</option>
                                <option>Other</option>
                            </select>
                        </div>
                        {type === "Other" ? (
                            <div className="icon-input">
                                <FiInfo size="20" className="mr-2"></FiInfo>
                                <input
                                    onChange={(e) => {
                                        setOther(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control my-2 remove-border shadow-none"
                                    placeholder="Title"
                                />
                            </div>
                        ) : null}
                        <div className="icon-input">
                            <FiType size="20" className="mr-2"></FiType>
                            <textarea
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                className="form-control my-2 remove-border shadow-none"
                                placeholder="Info the details of what you'll do!"
                                rows="3"
                                style={{ resize: "none" }}
                            />
                        </div>
                        <div className="icon-input">
                            <FiCamera size="20" className="mr-2"></FiCamera>
                            <div class="custom-file my-2">
                                <input
                                    type="file"
                                    class="custom-file-input remove-border shadow-none"
                                    multiple={false}
                                    accept=".jpg, .jpeg, .png"
                                />
                                <label
                                    class="custom-file-label text-left"
                                    for="validatedCustomFile"
                                >
                                    Take a picture
                                </label>
                            </div>
                        </div>
                        <div className="icon-input my-2">
                            <FiCalendar size="20" className="mr-2"></FiCalendar>
                            <input
                                type="date"
                                className="form-control remove-border shadow-none"
                            />
                        </div>
                        <div className="icon-input my-2">
                            <FiWatch size="20" className="mr-2"></FiWatch>
                            <input
                                type="time"
                                className="form-control remove-border shadow-none"
                            />
                        </div>

                        <div className="options-login">
                            <Link className="font-weight-medium">
                                <FiEdit2></FiEdit2> Edit
                            </Link>
                            {loading ? (
                                <div
                                    class="spinner-border text-light"
                                    role="status"
                                >
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn-md btn-register font-weight-bold "
                                >
                                    Share
                                </button>
                            )}
                        </div>
                        <div className="text-white text-center mt-2">
                            {msg === "Y" && (
                                <span>
                                    <strong>Wow! </strong>Event shared :)
                                </span>
                            )}
                            {msg === "N" && (
                                <span>
                                    <strong>Ops! </strong>Something is wrong
                                    with your event! :(
                                </span>
                            )}
                        </div>
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
    } else return <Redirect to="/"></Redirect>;
}
