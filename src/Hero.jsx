import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-[#495E57] text-white py-8 md:py-12 lg:py-16 px-4 md:px-6" aria-label="Hero section">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4CE14] mb-2">Little Lemon</h1>
            <h2 className="text-2xl md:text-3xl mb-4">Chicago</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <Link
              to="/reservations"
              className="bg-[#F4CE14] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#E5BF04] transition-colors w-full sm:w-auto inline-block text-center"
              aria-label="Reserve a table at Little Lemon"
            >
              Reserve a Table
            </Link>
          </div>
          <div className="flex justify-center mt-6 md:mt-0">
            <div className="w-full max-w-xs md:w-64 h-64 md:h-80 bg-gray-300 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=500&fit=crop"
                alt="Delicious Mediterranean food served at Little Lemon restaurant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
