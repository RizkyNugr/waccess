import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const NavBar = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [username, setUsername] = useState(''); // State untuk menyimpan username

  const profileRef = useRef(null);
  const featuresRef = useRef(null);

  // Fetch username from API
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/users');
        const user = response.data[0]; 
        setUsername(user.username); 
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);

  // Toggle dropdown profile
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prev) => !prev);
  };

  // Toggle dropdown fitur
  const toggleFeaturesDropdown = () => {
    setFeaturesDropdownOpen((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setFeaturesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/img/logo.png" alt="wAccess Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-blue-600">wAccess</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/Homepage" className="text-blue-600 hover:bg-gray-400 px-3 py-1 rounded-full 
          transition-all duration-300 ease-in-out">Home</a>

          {/* Partner Link */}
          <a href="#partner" className="text-blue-600 hover:bg-gray-400 px-3 py-1 rounded-full 
          transition-all duration-300 ease-in-out">Partner with us</a>

          {/* Features Dropdown */}
          <div 
            className="relative" 
            ref={featuresRef}
          >
            <button 
              className="text-blue-600 hover:bg-gray-400 px-3 py-1 rounded-full focus:outline-none 
              transition-all duration-300 ease-in-out"
              onClick={toggleFeaturesDropdown}
            >
              Fitur
            </button>

            {/* Dropdown Menu Fitur */}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all 
              duration-300 ease-in-out transform ${featuresDropdownOpen ? 'opacity-100' : 
              'opacity-0 pointer-events-none'}`}
            >
              <a href="/fiturproject" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 
              transition-all duration-200 ease-in-out">Proyek Terkini</a>
              <a href="/petapersebaran" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 
              transition-all duration-200 ease-in-out">Peta Persebaran</a>
              <a href="/fiturproject" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 
              transition-all duration-200 ease-in-out">Informasi Layanan</a>
            </div>
            <a href="/sanitasi" className="text-blue-600 hover:bg-gray-400 px-3 py-1 rounded-full 
            transition-all duration-300 ease-in-out">Sanitasi</a>
          </div>
        </div>

        {/* Profile Section */}
        <div 
          className="relative" 
          ref={profileRef}
        >
          <button 
            className="flex items-center text-blue-600 hover:bg-gray-400 px-4 py-1 rounded-full 
            focus:outline-none transition-all duration-300 ease-in-out"
            onClick={toggleProfileDropdown}
          >
            <img 
              src="/img/profil.png" 
              alt="Profile" 
              className="w-8 h-8 rounded-full mr-2" 
            />
            <span>{username || 'User'}</span>
          </button>

          {/* Dropdown Profile */}
          <div 
            className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all 
            duration-300 ease-in-out transform ${profileDropdownOpen ? 'opacity-100' 
            : 'opacity-0 pointer-events-none'}`}
          >
            <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-all 
            duration-200 ease-in-out">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
