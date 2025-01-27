import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function ChangePassword() {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/changepassword', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, oldPassword, newPassword }),
    });

    if (response.ok) {
      alert('Password changed successfully');
      navigate('/login'); // Redirect to login after password change
    } else {
      const data = await response.json();
      alert(`Failed to change password: ${data.msg || 'Unknown error'}`);
    }
  };

  return (
    <div className="container">
      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
}

export default ChangePassword;
