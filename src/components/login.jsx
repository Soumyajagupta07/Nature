import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import Menu from './Menu';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <div className="loginBlock">
      <Menu/>
      <h3>AUTHENTICATION</h3>
      <div className="createAccount">
        <form>
          <h2>Add Account</h2>
          <p><label htmlFor="email">Email : </label>
            <input type="email" name="email" required /></p>
          <p><label htmlFor="password">Password : </label>
            <input type="password" name="password" required /></p>
          <p><a href="#"><input type="submit" value="Create Account" /></a></p>
        </form>
      </div>
      <div className="alreadyUser">
        <form onSubmit={handleLogin}>
          <h2>Already a User??</h2>
          <p><label htmlFor="email">Email : </label>
            <input type="email" name="email" required /></p>
          <p><label htmlFor="password">Password : </label>
            <input type="password" name="password" required /></p>
          <p><input type="submit" value="Login" /></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;