import React from 'react';

function Specials() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white" aria-label="Weekly specials">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">This week's specials!</h2>
          <button
            className="bg-[#F4CE14] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#E5BF04] transition-colors w-full sm:w-auto"
            aria-label="View online menu"
          >
            Online Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map(special => (
            <article key={special.id} className="bg-[#EDEFEE] rounded-t-lg shadow-md overflow-hidden flex flex-col" aria-label={`${special.name} special dish`}>
              <div className="h-48 overflow-hidden">
                <img
                  src={special.image}
                  alt={`${special.name} - ${special.description.substring(0, 50)}...`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{special.name}</h3>
                  <span className="text-[#EE9972] font-bold" aria-label={`Price: ${special.price}`}>{special.price}</span>
                </div>
                <p className="text-gray-700 mb-4 flex-1 text-sm md:text-base">{special.description}</p>
                <button
                  className="text-left font-bold hover:text-[#495E57] transition-colors flex items-center gap-2"
                  aria-label={`Order ${special.name} for delivery`}
                >
                  Order a delivery
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
