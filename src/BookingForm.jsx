import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  // Get today's date in YYYY-MM-DD format for min date validation
  const getTodaysDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Validate form whenever fields change
  useEffect(() => {
    const validateForm = () => {
      // Check if date is selected and is today or in the future
      const isDateValid = date !== '' && date >= getTodaysDate();

      // Check if time is selected
      const isTimeValid = time !== '';

      // Check if guests is between 1 and 10
      const isGuestsValid = guests >= 1 && guests <= 10;

      // Check if occasion is selected
      const isOccasionValid = occasion !== '';

      return isDateValid && isTimeValid && isGuestsValid && isOccasionValid;
    };

    setIsFormValid(validateForm());
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Dispatch the state change with the selected date
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleGuestsChange = (e) => {
    const value = parseInt(e.target.value);
    // Ensure guests is always a valid number between 1 and 10
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setGuests(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Double-check form validity before submitting
    if (!isFormValid) {
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion
    };
    // Call the submitForm function passed from MainBody
    submitForm(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
      aria-label="Reservation form"
    >
      <div className="grid gap-2">
        <label htmlFor="res-date" className="font-medium text-gray-700">
          Choose date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          min={getTodaysDate()}
          required
          aria-required="true"
          aria-label="Choose reservation date"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#495E57]"
        />
        {date && date < getTodaysDate() && (
          <span className="text-red-500 text-sm">Please select today or a future date</span>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="res-time" className="font-medium text-gray-700">
          Choose time <span className="text-red-500">*</span>
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
          aria-label="Choose reservation time"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#495E57]"
        >
          {availableTimes.length > 0 ? (
            availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))
          ) : (
            <option value="">No times available</option>
          )}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="guests" className="font-medium text-gray-700">
          Number of guests <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          required
          aria-required="true"
          aria-label="Number of guests"
          aria-describedby="guests-help"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#495E57]"
        />
        <span id="guests-help" className="text-sm text-gray-500">
          Between 1 and 10 guests
        </span>
      </div>

      <div className="grid gap-2">
        <label htmlFor="occasion" className="font-medium text-gray-700">
          Occasion <span className="text-red-500">*</span>
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-required="true"
          aria-label="Choose occasion"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#495E57]"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        aria-label="Make reservation"
        className={`font-bold py-3 px-6 rounded-lg transition-colors mt-4 ${
          isFormValid
            ? 'bg-[#F4CE14] text-black hover:bg-[#E5BF04] cursor-pointer'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Make Your reservation
      </button>

      {!isFormValid && (
        <p className="text-sm text-gray-500 text-center -mt-2">
          Please fill in all required fields to enable reservation
        </p>
      )}
    </form>
  );
}

export default BookingForm;
