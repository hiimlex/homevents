import React, { useState } from "react";

import "./index.css";
import logo from "../../assets/logo.png";

import firebase from "../../config/firebase";
import "firebase/auth";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState();

    function SignIn() {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                setMsg("Y");
            })
            .catch(() => {
                setMsg("N");
            });
    }

    return (
        <div className="login-content d-flex align-itens-center">
            <form className="form-signin mx-auto">
                <div className="d-flex align-itens-center justify-content-center">
                    <img
                        src={logo}
                        className="img-fluid"
                        alt="logo"
                        style={{ width: 280, marginBottom: 0, marginTop: -80 }}
                    />
                </div>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-bold text-white">
                        Enjoy to our Plataform
                    </h1>
                </div>

                <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type="email"
                    id="inputEmail"
                    className="form-control my-2"
                    placeholder="Email"
                />

                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                    id="inputPassword"
                    className="form-control my-2"
                    placeholder="Password"
                />

                <button
                    className="btn btn-lg btn-login btn-block font-weight-bold"
                    type="button"
                    onClick={SignIn}
                >
                    Sign In
                </button>

                <div className="msg-login text-white text-center my-5">
                    {msg === "Y" && (
                        <span>
                            <strong>Wow! </strong>You are connected! :)
                        </span>
                    )}
                    {msg === "N" && (
                        <span>
                            <strong>Ops! </strong>Something wrong with your
                            email or password! :(
                        </span>
                    )}
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a href="#" className="mx-2">
                        Recover Password
                    </a>
                    <span className="text-white">&#9733;</span>
                    <a href="#" className="mx-2">
                        I Wanna Join
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Login;
