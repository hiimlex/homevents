import React from "react";

import "./index.css";

function Login() {
    return (
        <div className="login-content d-flex align-itens-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-bold text-white">
                        Login
                    </h1>
                </div>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control my-2"
                    placeholder="Email"
                />

                <input
                    type="password"
                    id="inputPassword"
                    className="form-control my-2"
                    placeholder="Senha"
                />

                <button
                    className="btn btn-lg btn-login btn-block"
                    type="submit"
                >
                    Login
                </button>

                <div className="msg-login text-white text-center my-5">
                    <span>
                        <strong>Wow! </strong>Você está conectado! :)
                    </span>
                    <br />
                    <span>
                        <strong>Ops! </strong>Verifique se a senha ou usuário
                        estão corretos! :(
                    </span>
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a href="#" className="mx-2">
                        Recuperar Senha
                    </a>
                    <span className="text-white">&#9733;</span>
                    <a href="#" className="mx-2">
                        Quero Cadastrar
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Login;
