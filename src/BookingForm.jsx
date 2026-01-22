import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Dispatch the state change with the selected date
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    >
      <div className="grid gap-2">
        <label htmlFor="res-date" className="font-medium text-gray-700">
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#495E57]"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="res-time" className="font-medium text-gray-700">
          Choose time
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#495E57]"
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="guests" className="font-medium text-gray-700">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#495E57]"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="occasion" className="font-medium text-gray-700">
          Occasion
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#495E57]"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <input
        type="submit"
        value="Make Your reservation"
        className="bg-[#F4CE14] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#E5BF04] transition-colors cursor-pointer mt-4"
      />
    </form>
  );
}

export default BookingForm;
