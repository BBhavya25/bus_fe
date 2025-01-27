import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../BusSearch.css';

const DeleteTicket = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 'currentUserId'; // Get the logged-in user's ID. This should be dynamic in a real app
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/bookings/user/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          const result = await response.json();
          setError(result.message || 'Error occurred while fetching bookings');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Error fetching bookings');
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`, { method: 'DELETE' });
      if (response.ok) {
        // Remove the deleted booking from the state to update the UI
        alert("Booking Deleted Successfully...")
        setBookings(bookings.filter(booking => booking._id !== id));
      } else {
        const result = await response.json();
        alert(result.message || 'Error occurred while deleting the booking.');
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Error occurred while deleting the booking.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (bookings.length === 0) {
    return <div>No bookings found!</div>;
  }

  return (
    <div>
      <h1>Your Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <div><strong>Passenger:</strong> {booking.passengerName}</div>
            <div><strong>Bus Number:</strong> {booking.busNumber}</div>
            <div><strong>Seat Number:</strong> {booking.seatNumber}</div>
            <div><strong>Date:</strong> {booking.date}</div>
            <div><strong>Time:</strong> {booking.time}</div>
            <button onClick={() => handleDelete(booking._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteTicket;
