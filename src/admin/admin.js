import React from "react";
import {
  FaSearch,
  FaTh,
  FaSignOutAlt,
  FaNewspaper,
  FaWater,
  FaPeopleArrows,
  FaChalkboard,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link untuk navigasi

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-20 md:w-1/5 h-full bg-gray-900 flex flex-col items-center py-5 space-y-8">
        <img src="/img/logo.png" alt="Logo" className="w-10 h-10 mb-4" />
        <div className="space-y-8 text-gray-400">
          <FaTh size={24} className="hover:text-blue-400 cursor-pointer" />
          <Link to="/adminberita">
            <FaNewspaper size={24} className="hover:text-blue-400 cursor-pointer" />
          </Link>
          <FaWater size={24} className="hover:text-blue-400 cursor-pointer" />
          <FaPeopleArrows size={24} className="hover:text-blue-400 cursor-pointer" />
          <FaChalkboard size={24} className="hover:text-blue-400 cursor-pointer" />
        </div>
        <div className="mt-auto mb-4 text-gray-400">
          <FaSignOutAlt size={24} className="hover:text-red-500 cursor-pointer" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-5 md:p-10 rounded-tl-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-blue-600 font-bold text-lg">Admin Dashboard</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-gray-800"
            />
            <FaSearch className="absolute right-3 top-2 text-gray-400" />
          </div>
        </div>

        {/* Content Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Box 1 */}
          <Link to="/adminberita" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
              <FaNewspaper size={32} className="text-blue-500" />
              <div>
                <h3 className="text-gray-800 font-bold text-lg">Berita</h3>
                <p className="text-gray-500 text-sm">Manage semua berita</p>
              </div>
            </div>
          </Link>

          {/* Box 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
            <FaWater size={32} className="text-green-500" />
            <div>
              <h3 className="text-gray-800 font-bold text-lg">Layanan Air</h3>
              <p className="text-gray-500 text-sm">Manage semua Layanan Air</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
            <FaPeopleArrows size={32} className="text-yellow-500" />
            <div>
              <h3 className="text-gray-800 font-bold text-lg">Forum</h3>
              <p className="text-gray-500 text-sm">Manage Forum</p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
            <FaChalkboard size={32} className="text-red-500" />
            <div>
              <h3 className="text-gray-800 font-bold text-lg">Komentar</h3>
              <p className="text-gray-500 text-sm">View Komentar</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
