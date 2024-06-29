import React from "react";
import './TitleMessageLayout.css';


import UserContactMessage from "../../UserContact-Message/UserContactMessage";
function TitleMessageLayout() {
    return (
        <div className="titleMessage-container">
            <UserContactMessage />
        </div>
    )
}

export default TitleMessageLayout;