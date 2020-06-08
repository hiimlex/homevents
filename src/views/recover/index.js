import React, { useState } from "react";
import { FiMail, FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.png";

import firebase from "../../config/firebase";
import "firebase/auth";

export default function Recover() {
    const [email, setEmail] = useState();

    return (
        <div className="recover-container">
            <div className="recover-content">
                <form className="form-recover mx-auto">
                    <img src={logo} className="img-fluid" alt="HomEvent" />
                    <div className="text-center my-4">
                        <h3 className="h5 font-weight-bold text-white">
                            Please inform your Email to recover your password!
                        </h3>
                        <div className="icon-input">
                            <FiMail size="20" className="mr-2"></FiMail>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email"
                                className="form-control my-2 remove-border shadow-none"
                                placeholder="Email"
                            />
                        </div>
                        <div className="options-recover my-2">
                            <Link to="/" className="font-weight-medium my-2">
                                <FiArrowLeft></FiArrowLeft> Back to Login
                            </Link>
                            <button
                                type="submit"
                                className="btn btn-md btn-register font-weight-bold "
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
