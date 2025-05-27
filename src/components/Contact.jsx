import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate form submission logic (e.g., send to API)
    console.log('Submitted:', formData);
    alert('Data submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.contact}>
      <p>Reach me at <a href="mailto:shrutikasoni375@gmail.com">shrutikasoni375@gmail.com</a></p>
      <p>
        <a href="https://github.com/ShrutikaSoni" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://linkedin.com/in/ishrutikasoni/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://twitter.com/ishrutikasoni" target="_blank" rel="noopener noreferrer">Twitter</a>
      </p>

      <div className={styles.formContainer}>
        <h3>Send a Message</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
      </div>

      
    </section>
  );
}

export default Contact;
