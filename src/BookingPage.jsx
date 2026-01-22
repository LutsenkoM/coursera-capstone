import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#495E57] text-white py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F4CE14] mb-4">
            Reserve a Table
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Book your dining experience at Little Lemon. Choose your preferred date,
            time, and let us know the occasion to make it special.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Make a Reservation</h2>
            <p className="text-gray-600">
              Fill out the form below to reserve your table. We look forward to serving you!
            </p>
          </div>

          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Reservation Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Reservations are available from 5:00 PM to 10:00 PM</li>
              <li>• Maximum party size is 10 guests</li>
              <li>• For larger parties, please call us at (312) 555-0100</li>
              <li>• Reservations must be made at least 2 hours in advance</li>
              <li>• Please arrive within 15 minutes of your reservation time</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingPage;
