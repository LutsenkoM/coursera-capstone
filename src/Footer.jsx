import React from 'react';
import logo from './assets/logo.png';

function Footer() {
  return (
    <footer className="bg-[#495E57] text-white py-6 md:py-8 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex justify-center sm:justify-start">
            <img src={logo} alt="Little Lemon" className="h-12 md:h-16 mb-4 brightness-0 invert" />
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">Doormat Navigation</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="/" className="hover:text-[#F4CE14] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#F4CE14] transition-colors">About</a></li>
              <li><a href="/menu" className="hover:text-[#F4CE14] transition-colors">Menu</a></li>
              <li><a href="/reservations" className="hover:text-[#F4CE14] transition-colors">Reservations</a></li>
              <li><a href="/order-online" className="hover:text-[#F4CE14] transition-colors">Order Online</a></li>
              <li><a href="/login" className="hover:text-[#F4CE14] transition-colors">Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Address: 123 Main St, Chicago</li>
              <li>Phone: (312) 555-0100</li>
              <li>Email: info@littlelemon.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">Social Media Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:text-[#F4CE14] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#F4CE14] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#F4CE14] transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 border-t border-gray-600 text-center text-sm md:text-base">
          <p>&copy; 2026 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
