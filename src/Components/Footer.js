// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>The Daily Greens</h2>
          <p>© 2024 The Daily Greens</p>
        </div>
        <div className="footer-section">
          <h3>STAY IN TOUCH</h3>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Submit</button>
        </div>
        <div className="footer-section links">
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section social-links">
          <ul>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
