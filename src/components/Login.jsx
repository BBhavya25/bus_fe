import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const navigate = useNavigate();
  


  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert('Login Successful...');
      // Navigate to main page after successful login
      navigate('/main');
    } else {
      alert('Login failed');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Pass the email for validation along with the old and new password
    const response = await fetch('http://localhost:5000/api/changepassword', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, oldPassword, newPassword }), // Send email with password data
    });

    if (response.ok) {
      alert('Password changed successfully');
      setIsChangingPassword(false);
    } else {
      const data = await response.json();
      alert(`Failed to change password: ${data.msg || 'Unknown error'}`);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {!isChangingPassword ? (
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
          <button type="button" onClick={() => setIsChangingPassword(true)}>
            Change Password
          </button>
        </form>
      ) : (
        <form onSubmit={handleChangePassword}>
          <input
          type="email"
          placeholder='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
          />
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Change Password</button>
        </form>
      )}
    </div>
  );
}

export default Login;
