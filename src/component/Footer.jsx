import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-blue-200 py-10 px-4">
      <div className="container mx-auto flex justify-between items-start space-y-4 md:space-y-0 md:space-x-4 
      flex-wrap">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/img/logo.png" alt="wAccess Logo" className="w-10 h-10" />
          <div className="text-blue-600 font-bold text-lg">wAccess</div>
          <div className="border-l-2 border-blue-600 h-20 ml-4"></div>
        </div>
        
        {/* Company Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-gray-800">Company</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Tentang kami</li>
            <li>Dokumentasi</li>
            <li>Alamat</li>
          </ul>
        </div>
        
        {/* Region */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-gray-800">Region</h3>
          <p className="text-gray-700">Indonesia</p>
        </div>
        
        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-gray-800">Contact</h3>
          <p className="text-gray-700">888-888-888</p>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <a href="#instagram" className="bg-red-500 text-white p-2 rounded-full">
            <FaInstagram size={20} />
          </a>
          <a href="#facebook" className="bg-blue-600 text-white p-2 rounded-full">
            <FaFacebookF size={20} />
          </a>
          <a href="#twitter" className="bg-gray-800 text-white p-2 rounded-full">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
