import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(''); // Clear error message when user starts typing
    setSuccessMessage(''); // Clear success message
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate sending email by just clearing the form and showing success message
    setSuccessMessage('Message Sent Successfully!');
    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Removed the Bubbles Component */}

      <h2 className="text-center">Contact Me</h2>

      {/* Show error message if there are any empty fields */}
      {error && <p className="error-message">{error}</p>}

      {/* Show success message if the form is submitted successfully */}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {/* Outer box for the form */}
      <div className="contact-form-wrapper">
        {/* Border elements for animation */}
        <div className="top-border"></div>
        <div className="bottom-border"></div>
        <div className="left-border"></div>
        <div className="right-border"></div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-row">
            <div className="contact-form-left">
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="contact-form-right">
              <label>
                Email Address:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-form-left">
              <label>
                Mobile Number:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="contact-form-right">
              <label>
                Subject:
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-form-left full-width">
              <label>
                Your Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="submit-box">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
