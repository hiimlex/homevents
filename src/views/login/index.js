import React, { useState } from "react";
import { FiMail, FiKey, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo.png";

import firebase from "../../config/firebase";
import "firebase/auth";

import { useSelector, useDispatch } from "react-redux";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState();
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();

    function SignIn(e) {
        e.preventDefault();
        if (!email || !password) {
            setMsg("N");
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                setMsg("Y");
                setTimeout(() => {
                    dispatch({ type: "LOG_IN", userEmail: email });
                }, 2000);
            })
            .catch(() => {
                setMsg("N");
                setPassword();
            });
    }

    function visiblePassword() {
        setVisible(!visible);
    }

    return (
        <div className="login-container">
            {useSelector((state) => state.userLogged) > 0 ? (
                <Redirect to="/home" />
            ) : null}
            <div className="login-content">
                <form className="form-signin mx-auto">
                    <img src={logo} className="img-fluid" alt="HomEvent" />

                    <div className="text-center my-4">
                        <h1 className="h3 font-weight-bold text-white">
                            Enjoy to our Plataform
                        </h1>
                    </div>
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
                    <button
                        className="btn btn-md btn-login btn-block font-weight-bold"
                        type="submit"
                        onClick={SignIn}
                    >
                        Sign In
                    </button>

                    <div className="text-white text-center my-2">
                        {msg === "Y" && (
                            <span>
                                <strong>Wow! </strong>You are connected! :)
                            </span>
                        )}
                        {msg === "N" && (
                            <span>
                                <strong>Ops! </strong>Something is wrong with
                                your email or password! :(
                            </span>
                        )}
                    </div>

                    <div className="options-login mt-n2">
                        <Link to="/recover">Recover Password</Link>
                        <span className="text-white"> &#9733; </span>
                        <Link to="/register">I Wanna Join</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
