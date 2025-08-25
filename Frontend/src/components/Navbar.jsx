// frontend/src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORT Link

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-2xl text-blue-600">LifeFIT</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-500 hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              <Link to="/goals" className="text-gray-500 hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Goals</Link>
              <Link to="/Journal" className="text-gray-500 hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Journal</Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font--medium transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;