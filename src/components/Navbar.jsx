import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../assets/logo.png";
import '../MainPage.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For the mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown menu

  // Toggle for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle for dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
        <span>Quick Bus</span>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        {/* Use Link components here instead of <a> */}
        <Link to="/main">Home</Link>
        <Link to="/book">Book Ticket</Link>
        
        {/* Dropdown for Account */}
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Account
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/deleteticket">Cancel Ticket</Link>
              <Link to="/changepassword">Change Password</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
