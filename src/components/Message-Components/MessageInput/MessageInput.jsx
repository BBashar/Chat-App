import React from "react";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import './MessageInput.css';
const ariaLabel = { 'aria-label': 'description' };
function MessageInput() {
    return (
        <div className="messageInput-container">
            <Input className="messageInput" />
        </div>
    );
}
export default MessageInput;