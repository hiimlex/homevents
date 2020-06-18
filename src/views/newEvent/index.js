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
    FiCoffee,
} from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";

import firebase from "../../config/firebase";

import "./styles.css";
import logo from "../../assets/logo.png";

import { useDispatch, useSelector } from "react-redux";

export default function NewEvent() {
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [other, setOther] = useState();
    const [description, setDescription] = useState();
    const [picture, setPicture] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [loading, setLoading] = useState();
    const [msg, setMsg] = useState();
    const [visible, setVisible] = useState("none");
    const [preview, setPreview] = useState();

    const dispatch = useDispatch();
    const userEmail = useSelector((state) => state.userEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    function SignOut(e) {
        e.preventDefault();
        dispatch({ type: "LOG_OUT" });
    }

    function handlePreview(e) {
        setPicture(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    function Share(e) {
        setMsg(null);
        e.preventDefault();
        setLoading(true);

        if (!title && !description && !picture && !date && !time) {
            if (!type || !other) {
                setTimeout(() => {
                    setMsg(
                        "Ops! :( Something is wrong, make sure of all camps aren't empty!"
                    );
                    setLoading(false);
                }, 500);
                return;
            }
        }

        storage
            .ref(`images/${picture.name}`)
            .put(picture)
            .then(() => {
                db.collection("events")
                    .add({
                        title: title,
                        type: type === "Other" ? other : type,
                        description: description,
                        date: date,
                        time: time,
                        user: userEmail,
                        views: 0,
                        picture: picture.name,
                        privacy: 0,
                        createdAt: new Date(),
                    })
                    .then(() => {
                        setTimeout(() => {
                            setMsg("Shared Sucessfully!");
                            setLoading(false);
                        }, 500);
                    })
                    .catch((err) => {
                        setTimeout(() => {
                            setMsg(String(err));
                            setLoading(false);
                        }, 500);
                    });
            });
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
                                <option>Activity</option>
                                <option>Gaming</option>
                                <option>Live Music</option>
                                <option>Gym</option>
                                <option>Card Game</option>
                                <option>HomeWork</option>
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
                                    placeholder="So What's ?!"
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
                                    onChange={handlePreview}
                                    type="file"
                                    class="custom-file-input remove-border shadow-none"
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
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }}
                                type="date"
                                className="form-control remove-border shadow-none"
                            />
                        </div>
                        <div className="icon-input my-2">
                            <FiWatch size="20" className="mr-2"></FiWatch>
                            <input
                                onChange={(e) => {
                                    setTime(e.target.value);
                                }}
                                type="time"
                                className="form-control remove-border shadow-none"
                            />
                        </div>

                        <div className="options-login">
                            <Link
                                className="font-weight-medium"
                                onClick={() => {
                                    setVisible("block");
                                }}
                            >
                                <FiCoffee size="20" className="mr-2"></FiCoffee>
                                See Preview
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
                                    onClick={Share}
                                    type="submit"
                                    className="btn btn-md btn-register font-weight-bold"
                                >
                                    Share
                                </button>
                            )}
                        </div>
                        <div className="text-white text-center mt-2">{msg}</div>
                    </form>

                    <div className="my-modal" style={{ display: `${visible}` }}>
                        <div
                            className="my-modal-content"
                            style={{ borderRadius: 4 }}
                        >
                            <span
                                className="close"
                                onClick={() => {
                                    setVisible("none");
                                }}
                            >
                                &times;
                            </span>
                            <div className="text-center">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="img-fluid"
                                />
                            </div>
                            <h3 className="h5 font-weight-bold text-center my-2 text-uppercase">
                                {title}
                            </h3>
                            <h3 className="h6 font-weight-medium text-center my-2">
                                {type === "Other" ? other : type}
                            </h3>

                            <div className="d-flex justify-content-between align-items-center flex-row">
                                <p className="text-justify my-2 mx-1">
                                    <FiCalendar className="mr-2"></FiCalendar>
                                    {date}
                                </p>
                                <p className="text-justify my-2 mx-1">
                                    <FiWatch className="mr-2"></FiWatch>
                                    {time}
                                </p>
                            </div>

                            <p className="text-justify my-2 mx-1">
                                {description}
                            </p>
                            <hr dataContent="ABOUT" className="hr-text" />
                        </div>
                    </div>

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
