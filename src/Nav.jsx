import React from 'react';

function Nav() {
  return (
    <nav className="p-4">
      <ul className="grid grid-cols-6 gap-4 text-center text-black">
        <li><a href="/" className="hover:text-yellow-400">Home</a></li>
        <li><a href="/about" className="hover:text-yellow-400">About</a></li>
        <li><a href="/menu" className="hover:text-yellow-400">Menu</a></li>
        <li><a href="/reservations" className="hover:text-yellow-400">Reservations</a></li>
        <li><a href="/order-online" className="hover:text-yellow-400">Order Online</a></li>
        <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

