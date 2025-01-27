import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate clearing user session (e.g., remove user data from local storage or state)
    alert('Logged out successfully!');
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div className="container">
      <h2>Logout</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Logout;
