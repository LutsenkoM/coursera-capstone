import React from 'react';
import Nav from "./Nav.jsx";

function Header() {
  return (
    <header className="grid grid grid-flow-col p-4 bg-gray-100 items-center">
      <h1 className="text-2xl font-bold">Little Lemon</h1>
      <Nav />
    </header>
  );
}

export default Header;

