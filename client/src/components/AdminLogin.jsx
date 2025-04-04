import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import '../css/AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>ADMIN PORTAL</h1>
          <div className="admin-login-input-group">
            <input 
              type="text" 
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="admin-login-icon" />
          </div>
          <div className="admin-login-input-group">
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="admin-login-icon" />
          </div>

          <button type="submit" className="admin-login-btn">Access Dashboard</button>

          <div className="admin-login-decor">
            <div className="admin-login-decor-circle"></div>
            <div className="admin-login-decor-circle"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;