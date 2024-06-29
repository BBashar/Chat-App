import React from "react";
import './MessageLayout.css'

import TitleMessageLayout from "../TitleMessageLayout/TitleMessageLayout";
import MessageInputLayout from "../MessageInputLayout/MessageIncputLayout";
import SendReceiveLayout from "../SendReceiveLayout/SendReceive";
function MessageLayout() {
    return (
        <div className="messageLayout-container">
            <TitleMessageLayout />
            <SendReceiveLayout />
            <MessageInputLayout />
        </div>
    );
}

export default MessageLayout;