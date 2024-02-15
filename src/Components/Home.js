// Home.js

import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"; // Import the Footer component
import ContactForm from './ContactForm';
import './Home.css';

const Home = () => {
    return(
        <div className="home">
            <div className="main-content"> {/* This div wraps all content except the footer */}
                <Header />
                <Main />
                {/* other components if any */}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
