import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';

// Initialize available times using the API
function initializeTimes() {
  // Create a date object for today
  const today = new Date();
  // Call the API function to get available times for today
  return fetchAPI(today);
}

// Reducer function to update available times
function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // action.payload contains the selected date string
      // Convert it to a Date object and fetch available times from API
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate);
    default:
      return state;
  }
}

function MainBody() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // Function to submit the booking form
  const submitForm = (formData) => {
    // Call the API to submit the form data
    const isSubmitted = submitAPI(formData);

    // If submission is successful, navigate to confirmation page
    if (isSubmitted) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default MainBody;
