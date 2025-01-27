import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Log the data to verify what's being sent
    console.log({ username, email, password });

    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json(); // Capture the response from the backend

    if (response.ok) {
      alert('Sign-up successful! Redirecting to login...');
      navigate('/login');
    } else {
      alert(`Sign-up failed: ${data.msg || 'Unknown error'}`);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={handleLoginRedirect} className="login-button">
        Go to Login
      </button>
    </div>
  );
}

export default SignUp;
