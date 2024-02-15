// CustomAlert.js

import React from 'react';
import './CustomAlert.css'; // Make sure this CSS is being loaded correctly

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert">
        <p>{message}</p>
        <button onClick={onClose} className="close-alert-btn">&times;</button>
      </div>
    </div>
  );
};

export default CustomAlert;
