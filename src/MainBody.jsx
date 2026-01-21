import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

// Initialize available times
function initializeTimes() {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

// Reducer function to update available times
function updateTimes(state, action) {
  // For now, return the same available times regardless of the date
  // This will be enhanced later with actual date-based logic
  switch (action.type) {
    case 'UPDATE_TIMES':
      // action.payload will contain the selected date
      // For now, returning the same times
      return state;
    default:
      return state;
  }
}

function MainBody() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
            />
          }
        />
      </Routes>
    </main>
  );
}

export default MainBody;

