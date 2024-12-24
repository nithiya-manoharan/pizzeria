import React, { useState } from 'react';
import './contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <>
    <main className='aboutMain'>
      <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>Phone: +91 88997 76655 </p>
          <p>Email: info@pizzeria.com</p>
          <p>Address: 123 Pizza Street, Food City, Chennai</p>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className='conatctUs-btn'>Submit</button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you for reaching out!</h2>
            <p>These data's are not stored anywhere.</p>
          </div>
        )}
      </div>
    </main>
    </>
  );
};

export default ContactUs;