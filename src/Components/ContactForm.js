// ContactForm.js
import React, { useState } from 'react';
import CustomAlert from './CustomAlert'; // Import the CustomAlert component
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: ''
  });
  const [showAlert, setShowAlert] = useState(false); // State to control the alert visibility

  // Handle the form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the submission is successful, reset the form and close it
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          address: '',
          email: ''
        });
        onClose(); // Close the form
      } else if (response.status === 409) {
        // If the user already exists, show the custom alert
        setShowAlert(true);
      } else {
        // If there's another type of error response from the server, log it
        const responseBody = await response.text();
        console.error('Failed to submit form:', responseBody);
      }
    } catch (error) {
      // If there's a network error, log it
      console.error('Network error:', error);
    }
  };

  // Handle closing the alert and resetting the form
  const handleCloseAlert = () => {
    setShowAlert(false); // Hide the custom alert
    setFormData({ // Clear the form fields
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: ''
    });
  };

  return (
    <div className="contact-form-container">
      {showAlert && (
        <CustomAlert
          message="User data already submitted, Please ensure to give the details accordingly"
          onClose={handleCloseAlert}
        />
      )}
      <div className="contact-form-box">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <form onSubmit={handleSubmit} className="contact-form">
          <p className="form-instruction">Please submit your details and we will reach out to you.</p>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
