
import React, { useState } from 'react';
import  './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = ({isOpen,onClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state: auth, dispatch } =useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', payload: { email, password } });

    
    if (email === 'email@gmail.com' && password === 'D@1234') {
      navigate('/');
      alert('Login successful');
      onClose();
    }
  };
  if(!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
