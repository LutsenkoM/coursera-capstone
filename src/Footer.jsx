import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p>&copy; 2026 Little Lemon. All rights reserved.</p>
          </div>
          <div>
            <p>Contact us</p>
          </div>
          <div>
            <p>Follow us</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
