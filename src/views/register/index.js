import React, { useState } from "react";
import { FiArrowLeft, FiMail, FiKey, FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.png";

import firebase from "../../config/firebase";
import "firebase/auth";

function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState();
    const [msgType, setMsgType] = useState();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState();

    function SignUp(e) {
        e.preventDefault();
        setMsgType(null);
        setLoading(1);

        if (!email || !password) {
            setMsgType("N");
            setMsg("You need inform the email and password to register!");
            setLoading(0);
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                setLoading(0);
                setTimeout(() => {
                    setMsgType("Y");
                }, 500);
            })
            .catch((err) => {
                setLoading(0);
                setTimeout(() => {
                    setMsgType("N");
                    setMsg(String(err));
                }, 500);
            });
    }

    function visiblePassword(e) {
        e.preventDefault();
        setVisible(!visible);
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} className="img-fluid" alt="HomEvent" />

                    <h1 className="h3 my-4 font-weight-bold">
                        Create your Account!
                    </h1>

                    <form className="text-center mx-auto">
                        <div className="icon-input">
                            <FiMail size="20" className="mr-2"></FiMail>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email"
                                className="form-control my-2 remover-border shadow-none"
                                placeholder="Email"
                            />
                        </div>
                        <div className="icon-input">
                            <FiKey size="20" className="mr-2 "></FiKey>
                            <div className="input-group">
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    type={visible ? "text" : "password"}
                                    className="form-control my-2 remove-border shadow-none"
                                    placeholder="Password"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-light form-control remove-border shadow-none"
                                        onClick={visiblePassword}
                                        type="button"
                                    >
                                        {visible ? (
                                            <FiEye></FiEye>
                                        ) : (
                                            <FiEyeOff></FiEyeOff>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="text-white text-center my-1">
                            {msgType === "Y" && (
                                <span>
                                    <strong>Wow! </strong>You are a user now! :)
                                </span>
                            )}
                            {msgType === "N" && <span>{msg} :(</span>}
                        </div>

                        <div className="options-register">
                            <Link to="" className="font-weight-medium my-2">
                                <FiArrowLeft></FiArrowLeft> I already have a
                                account.
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
                                    onClick={SignUp}
                                    type="submit"
                                    className="btn btn-md btn-register font-weight-bold "
                                >
                                    Register
                                </button>
                            )}
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Register;
