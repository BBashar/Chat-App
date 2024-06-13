import React from "react";
import './contacts.css';

function ContactsList() {
    return (
        <div className="contactsList-container">
            <div className="constact-title">
                <h2>Message</h2>
            </div>

            <div className="user-contact">
                <div className="user-image">
                    <img src="https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" alt="" />
                    <div className="user-name">
                        <h3>Bashar</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsList;