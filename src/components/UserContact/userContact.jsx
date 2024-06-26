//the model that a message will appear in in contacts 

import React from "react";
import './userContact.css'

function UserContact() {
    return (
        <div className="userContact-container">
            <div className="user-image">
                <img src="https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" alt="" />
            </div>
            <div className="nameAndLastMessage">
                <div className="user-name">
                    <h3>Bashar</h3>
                </div>
                <div className="lastMessage">
                    <p>Last message</p>
                </div>
            </div>

        </div>
    )
}

export default UserContact;