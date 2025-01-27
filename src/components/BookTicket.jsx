import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../BusSearch.css';

const BookTicket = () => {
  const [passengerName, setPassengerName] = useState('');
  const [busNumber, setBusNumber] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passengerName, busNumber, seatNumber, date, time }),
      });
      const result = await response.json();
      if (response.ok) {
        // Save the entire ticket data in local storage
        localStorage.setItem(result.busBooking._id, JSON.stringify(result.busBooking));
        localStorage.setItem('ticketId', result.busBooking._id); // Save the ticket ID to quickly identify it
        alert("Booking added Succesfully...");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error booking ticket:", error);
    }
  };
  

  return (
    <div className="book-ticket-page">
      <h1>Book Ticket</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Passenger Name" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} required />
        <input type="text" placeholder="Bus Number" value={busNumber} onChange={(e) => setBusNumber(e.target.value)} required />
        <input type="number" placeholder="Seat Number" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default BookTicket;
