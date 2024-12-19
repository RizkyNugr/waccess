import React, { useState, useRef } from 'react';

const NavBar = () => {
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false); // Status awal dropdown tertutup
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Status menu mobile
  const dropdownRef = useRef(null);

  // Menangani hover pada dropdown
  const handleMouseEnter = () => {
    setFeaturesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setFeaturesDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/img/logo.png" alt="wAccess Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-blue-600">wAccess</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-blue-600"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-blue-600 hover:bg-gray-400 px-3 py-1 rounded-full">Home</a>

          {/* Partner with us link */}
          <a href="/login" className="text-blue-600 hover:bg-gray-400 px-3 py-1 rounded-full">Partner with us</a>

          {/* Features Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <button
              className="text-blue-600 hover:bg-gray-400 px-3 py-1 rounded-full focus:outline-none"
              aria-expanded={featuresDropdownOpen}
              aria-haspopup="true"
            >
              Fitur
            </button>

            {/* Dropdown Menu for Fitur */}
            {featuresDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-100 transition-opacity duration-200 ease-in-out">
                <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Proyek Terkini</a>
                <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Peta Persebaran</a>
                <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Informasi Layanan</a>
              </div>
            )}
          </div>
          <a href="/login" className="text-blue-600 hover:bg-gray-400 px-3 py-1 rounded-full transition-all duration-300 ease-in-out">Sanitasi</a>
        </div>

        {/* Login Button */}
        <div>
          <a href="/login" className="text-white border border-white px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition">Login</a>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-gray-300 p-4`}>
        <a href="/" className="block text-blue-600 hover:bg-gray-400 px-3 py-2 rounded-full">Home</a>
        <a href="/login" className="block text-blue-600 hover:bg-gray-400 px-3 py-2 rounded-full">Partner with us</a>

        {/* Features Dropdown for Mobile */}
        <div 
          className="relative"
          onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)} 
        >
          <button
            className="w-full text-left text-blue-600 hover:bg-gray-400 px-3 py-2 rounded-full"
            aria-expanded={featuresDropdownOpen}
            aria-haspopup="true"
          >
            Fitur
          </button>

          {/* Dropdown Menu for Fitur */}
          {featuresDropdownOpen && (
            <div className="mt-2 w-full bg-white rounded-md shadow-lg">
              <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Proyek Terkini</a>
              <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Peta Persebaran</a>
              <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Informasi Layanan</a>
            </div>
          )}
        </div>
        <a href="/login" className="block text-blue-600 hover:bg-gray-400 px-3 py-2 rounded-full transition-all duration-300 ease-in-out">Sanitasi</a>
      </div>
    </div>
  );
};

export default NavBar;
