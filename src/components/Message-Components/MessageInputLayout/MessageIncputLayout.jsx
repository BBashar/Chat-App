import React from "react";
import './MessageInputLayout.css';

import MessageInput from "../MessageInput/MessageInput";

import cursor from './../../../assets/images/cursor.png';
import sad from './../../../assets/images/sad.png';
import send from './../../../assets/images/send.png'
function MessageInputLayout() {
    return (
        <div className="messageInputLayout-container">
            <MessageInput />
            <div className="messageFunctionality">
                <div className="attachFile">
                    <img src={cursor} alt="" />
                </div>
                <div className="emojiSelector">
                    <img src={sad} alt="" />
                </div>
                <div className="sendMessage">
                    <img src={send} alt="" />
                </div>
            </div>

        </div>
    )
}

export default MessageInputLayout;