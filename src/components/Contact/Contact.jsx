import React from "react";
import "./Contact.css";
import facebookLogo from "./images/facebook.png"; 
import instagramLogo from "./images/instagram.png";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <div className="social-media-icons">
                <a href="https://www.facebook.com/turopita.kids.ok" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/turopita.kids/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
            </div>
        </div>
    );
};

export default Contact;