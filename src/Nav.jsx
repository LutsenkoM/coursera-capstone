import React from 'react';

function Nav() {
  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-800 font-medium">
        <li><a href="/" className="hover:text-[#495E57] transition-colors">Home</a></li>
        <li><a href="/about" className="hover:text-[#495E57] transition-colors">About</a></li>
        <li><a href="/menu" className="hover:text-[#495E57] transition-colors">Menu</a></li>
        <li><a href="/reservations" className="hover:text-[#495E57] transition-colors">Reservations</a></li>
        <li><a href="/order-online" className="hover:text-[#495E57] transition-colors">Order Online</a></li>
        <li><a href="/login" className="hover:text-[#495E57] transition-colors">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
