import React from 'react';

function About() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Little Lemon</h2>
            <h3 className="text-2xl md:text-3xl mb-4">Chicago</h3>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              Little Lemon is a charming neighborhood bistro that serves simple food
              and classic cocktails in a lively but casual environment. The restaurant
              features a locally-sourced menu with daily specials.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
          </div>
          <div className="relative h-64 md:h-96 hidden md:block">
            <div className="absolute w-48 md:w-64 h-56 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=500&fit=crop"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-48 md:w-64 h-56 md:h-80 rounded-lg overflow-hidden shadow-lg top-8 md:top-12 left-24 md:left-32">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop"
                alt="Chefs cooking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:hidden flex justify-center gap-4">
            <div className="w-40 h-52 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=500&fit=crop"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-40 h-52 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop"
                alt="Chefs cooking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

