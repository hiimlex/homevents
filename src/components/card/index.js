import React, { useState, useEffect } from "react";
import { FiArrowRight, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";
import aa from "../../assets/aa.jpg";

import firebase from "../../config/firebase";

export default function Card({ img, title, description, views, id }) {
    const [url, setUrl] = useState();

    useEffect(() => {
        firebase
            .storage()
            .ref(`images/${img}`)
            .getDownloadURL()
            .then(async (url) => await setUrl(url));
    });

    return (
        <div className="col-md-3 col-sm-6 col-xs-12 d-flex align-items-center ">
            <div className="card mx-auto card-event">
                <img
                    src={url}
                    alt="eie"
                    className="card-img-top"
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 2 }}
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between align-items center">
                        <div className=" text-left p-2">
                            <FiEye size="20" className="mr-2"></FiEye> {views}{" "}
                            views
                        </div>

                        <Link
                            to={`/event/${id}`}
                            className="btn btn-text btn-register font-weight-bold remove-border shadow-none d-flex align-items-center text-right"
                        >
                            View
                            <FiArrowRight
                                size="20"
                                className="ml-2"
                            ></FiArrowRight>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
