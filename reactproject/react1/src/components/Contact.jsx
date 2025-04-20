// Contact Component
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, like sending data to a server.
    console.log('Form Submitted', formData);
    alert('Message Sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
