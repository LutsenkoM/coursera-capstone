import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1',
      review: 'Amazing food and great atmosphere! The Greek salad was fresh and delicious.'
    },
    {
      id: 2,
      name: 'Michael Brown',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=2',
      review: 'Best Mediterranean restaurant in Chicago. The lemon dessert is a must-try!'
    },
    {
      id: 3,
      name: 'Emily Davis',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3',
      review: 'Wonderful experience! Authentic recipes with a modern twist. Highly recommend!'
    },
    {
      id: 4,
      name: 'David Wilson',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=4',
      review: 'Family-friendly and welcoming. The service is excellent and the food is outstanding.'
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-[#495E57]" aria-label="Customer testimonials">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Testimonials</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(testimonial => (
            <article key={testimonial.id} className="bg-white rounded-lg p-6 shadow-lg" aria-label={`Review by ${testimonial.name}`}>
              <div className="flex items-center mb-2" role="img" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#F4CE14]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`Profile picture of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <h3 className="font-bold text-sm md:text-base">{testimonial.name}</h3>
              </div>
              <p className="text-gray-700 text-sm">{testimonial.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
