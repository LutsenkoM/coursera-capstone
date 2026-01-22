import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 text-center" aria-labelledby="confirmation-heading">
      <article className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6" aria-hidden="true">
          <svg
            className="w-20 h-20 mx-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 id="confirmation-heading" className="text-3xl font-bold text-[#495E57] mb-4">
          Booking Confirmed!
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Your reservation has been successfully confirmed.
          We look forward to serving you at Little Lemon!
        </p>

        <p className="text-gray-600 mb-8">
          A confirmation email has been sent to your email address with all the details.
        </p>

        <Link
          to="/"
          className="inline-block bg-[#F4CE14] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#E5BF04] transition-colors"
          aria-label="Return to home page"
        >
          Return to Home
        </Link>
      </article>
    </main>
  );
}

export default ConfirmedBooking;
