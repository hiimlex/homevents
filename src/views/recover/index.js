import React, { useState } from "react";
import { FiMail, FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.png";

import firebase from "../../config/firebase";
import "firebase/auth";

export default function Recover() {
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();
    const [loading, setLoading] = useState(false);

    function RecoverPassword(e) {
        e.preventDefault();

        setLoading(true);

        if (!email) {
            setTimeout(() => {
                setMsg("You have to inform your email to continue!");
                setLoading(false);
            }, 500);
            return;
        }
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                setLoading(false);
                setTimeout(() => {
                    setMsg(
                        "The link to reset your passoword has sent to your Email!"
                    );
                }, 500);
            })
            .catch((err) => {
                setLoading(false);
                setTimeout(() => {
                    setMsg(String(err));
                }, 500);
            });
    }

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
                            {loading ? (
                                <div
                                    class="spinner-border text-light"
                                    role="status"
                                >
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <button
                                    onClick={RecoverPassword}
                                    type="submit"
                                    className="btn btn-md btn-register font-weight-bold "
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                        <div className="text-white text-center my-1">{msg}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}
