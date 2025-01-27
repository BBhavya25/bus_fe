import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import ChangePassword from './components/ChangePassword.jsx';
import Navbar from './components/Navbar.jsx';
import Logout from './components/Logout.jsx';
import BookTicket from './components/BookTicket.jsx';
import DeleteTicket from './components/DeleteTicket.jsx'; 
import MainPage from './components/MainPage.jsx';
import './MainPage.css';

function App() {
  const [user, setUser] = useState(null);
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Retrieve user data from localStorage
    }
    // Fetch tickets from localStorage or set empty array if none exist
    const storedTickets = localStorage.getItem('bookedTickets');
    if (storedTickets) {
      setBookedTickets(JSON.parse(storedTickets));
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
        <Route path="/main" element={<MainPage />} />
        <Route
          path="/book"
          element={<BookTicket bookedTickets={bookedTickets} setBookedTickets={setBookedTickets} />}
        />
        <Route path="/deleteticket" element={<DeleteTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
