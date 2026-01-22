import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-800 font-medium">
        <li><Link to="/" aria-label="Navigate to Home page" className="hover:text-[#495E57] transition-colors">Home</Link></li>
        <li><Link to="/about" aria-label="Navigate to About page" className="hover:text-[#495E57] transition-colors">About</Link></li>
        <li><Link to="/menu" aria-label="Navigate to Menu page" className="hover:text-[#495E57] transition-colors">Menu</Link></li>
        <li><Link to="/reservations" aria-label="Navigate to Reservations page" className="hover:text-[#495E57] transition-colors">Reservations</Link></li>
        <li><Link to="/order-online" aria-label="Navigate to Order Online page" className="hover:text-[#495E57] transition-colors">Order Online</Link></li>
        <li><Link to="/login" aria-label="Navigate to Login page" className="hover:text-[#495E57] transition-colors">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
