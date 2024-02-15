// Main.js
import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Main = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    const handleShowContactForm = () => {
        setShowContactForm(true);
    };

    const handleHideContactForm = () => {
        setShowContactForm(false);
    };

    return (
        <div className="main">
            <div className="col col1">
            <h2>Your Fresh Picks</h2>
                <p>Discover our range of freshly cut vegetables, ready for your kitchen. Select your favorites from our collection and add a burst of freshness to every meal.<br /> For more variety, click the button below.</p>
                <button type="button" onClick={handleShowContactForm}>Know More</button>
            </div>
            <div className="col">
            <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
            {showContactForm && (
                <div className="contact-modal">
                    <ContactForm onClose={handleHideContactForm} />
                </div>
            )}
        </div>
    );
}

export default Main;
