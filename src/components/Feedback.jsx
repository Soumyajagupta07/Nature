import React from 'react';
import '../styles/feedback.css';
import Menu from './Menu'
 
const Feedback = () => {
  return (
    <div className='mainfeedback'>
      <Menu/>
    <div className="feedback">
      <h2>Feedback</h2>
      <p>We value your feedback and suggestions. Please let us know how we can improve.</p>
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
          <label htmlFor="feedback">Feedback: </label>
          <textarea name="feedback" required></textarea>
        </p>
        <p>
          <input type="submit" value="Submit Feedback" />
        </p>
      </form>
    </div>
    </div>
  );
};
 
export default Feedback;