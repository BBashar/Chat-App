import React from "react";
import './contacts.css';

import UserContact from "../UserContact/userContact";

function ContactsList() {
    return (
        <div className="contactsList-container">
            <div className="constact-title">
                <h2>Message</h2>
            </div>

            <div className="user-contact">
                <UserContact />
                <UserContact />
                <UserContact />
                <UserContact />
            </div>
        </div>
    )
}

export default ContactsList;