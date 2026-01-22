import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

function Footer() {
  return (
    <footer className="bg-[#495E57] text-white py-6 md:py-8 px-4 md:px-6" role="contentinfo">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex justify-center sm:justify-start">
            <img src={logo} alt="Little Lemon Restaurant Logo" className="h-12 md:h-16 mb-4 brightness-0 invert" />
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-base md:text-lg font-bold mb-4">Doormat Navigation</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link to="/" aria-label="Navigate to Home page" className="hover:text-[#F4CE14] transition-colors">Home</Link></li>
              <li><Link to="/about" aria-label="Navigate to About page" className="hover:text-[#F4CE14] transition-colors">About</Link></li>
              <li><Link to="/menu" aria-label="Navigate to Menu page" className="hover:text-[#F4CE14] transition-colors">Menu</Link></li>
              <li><Link to="/reservations" aria-label="Navigate to Reservations page" className="hover:text-[#F4CE14] transition-colors">Reservations</Link></li>
              <li><Link to="/order-online" aria-label="Navigate to Order Online page" className="hover:text-[#F4CE14] transition-colors">Order Online</Link></li>
              <li><Link to="/login" aria-label="Navigate to Login page" className="hover:text-[#F4CE14] transition-colors">Login</Link></li>
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="text-base md:text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Address: 123 Main St, Chicago</li>
              <li><a href="tel:+13125550100" aria-label="Call us at (312) 555-0100" className="hover:text-[#F4CE14] transition-colors">Phone: (312) 555-0100</a></li>
              <li><a href="mailto:info@littlelemon.com" aria-label="Email us at info@littlelemon.com" className="hover:text-[#F4CE14] transition-colors">Email: info@littlelemon.com</a></li>
            </ul>
          </address>

          <nav aria-label="Social media links">
            <h3 className="text-base md:text-lg font-bold mb-4">Social Media Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page (opens in new tab)" className="hover:text-[#F4CE14] transition-colors">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page (opens in new tab)" className="hover:text-[#F4CE14] transition-colors">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page (opens in new tab)" className="hover:text-[#F4CE14] transition-colors">Twitter</a></li>
            </ul>
          </nav>
        </div>

        <div className="mt-6 md:mt-8 pt-6 border-t border-gray-600 text-center text-sm md:text-base">
          <p>&copy; 2026 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
