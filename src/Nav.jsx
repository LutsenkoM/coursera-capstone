import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-800 font-medium">
        <li><Link to="/" className="hover:text-[#495E57] transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#495E57] transition-colors">About</Link></li>
        <li><Link to="/menu" className="hover:text-[#495E57] transition-colors">Menu</Link></li>
        <li><Link to="/reservations" className="hover:text-[#495E57] transition-colors">Reservations</Link></li>
        <li><Link to="/order-online" className="hover:text-[#495E57] transition-colors">Order Online</Link></li>
        <li><Link to="/login" className="hover:text-[#495E57] transition-colors">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
