import React from "react";
import './MessageLayout.css'

import TitleMessageLayout from "../TitleMessageLayout/TitleMessageLayout";
function MessageLayout() {
    return (
        <div className="messageLayout-container">
            <TitleMessageLayout />
        </div>
    );
}

export default MessageLayout;