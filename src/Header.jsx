import React from 'react';
import Nav from "./Nav.jsx";
import logo from './assets/logo.png';

function Header() {
  return (
    <header className="bg-white shadow-sm py-3 px-4 md:py-4 md:px-6 sticky top-0 z-50" role="banner">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
          <img src={logo} alt="Little Lemon Restaurant Logo" className="h-10 md:h-12" />
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
