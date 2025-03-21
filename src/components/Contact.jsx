import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      <form>
        <p>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message: </label>
          <textarea name="message" required></textarea>
        </p>
        <p>
          <input type="submit" value="Send Message" />
        </p>
      </form>
    </div>
  );
};

export default Contact;