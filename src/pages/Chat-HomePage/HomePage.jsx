import React from "react";
import './HomePage.css';
import SettingsBar from "../../components/SettingSideBar/settingBar";
import ContactsList from "../../components/ContactsSideBar/contacts";
import MessageLayout from "../../components/Message-Components/MessagesLayout/MessageLayout";
function HomePage() {
    return (
        <div className="homePage-container">
            <SettingsBar />
            <ContactsList />
            <MessageLayout />
        </div>
    );
}

export default HomePage;