import React from "react";

import "./styles.css";
import logo from "../../assets/logo.png";

export default function NewEvent() {
    return (
        <div className="new-event-container">
            <div className="new-event-content">
                <form className="mx-auto">
                    <img src={logo} className="img-fluid" alt="HomEvent" />
                </form>
            </div>
        </div>
    );
}
