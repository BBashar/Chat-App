import React from "react";
import './settingsBar.css';
import logOut from '../../assets/images/log-out.png';
import messages from '../../assets/images/messenger.png';
import settings from '../../assets/images/settings.png';
import userProfile from '../../assets/images/user.png';
function SettingsBar() {
    return (
        <div className="settings-container">
            <div className="myProfileSettings bubble">
                <a href="" ><img src={userProfile} alt="userProfile" className="bubble" /></a>
            </div>
            <div className="messagesSettings bubble">
                <a href="" ><img src={messages} alt="messages" className="bubble" /></a>
            </div>

            <div className="seetingsOption bubble">
                <a href="" ><img src={settings} alt="settings" className="bubble" /></a>
            </div>
            <div className="logoutSettings bubble">
                <a href="" ><img src={logOut} alt="logout" className="bubble" /></a>
            </div>
        </div>
    )
}

export default SettingsBar;