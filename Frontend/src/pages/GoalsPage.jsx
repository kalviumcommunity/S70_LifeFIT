// frontend/src/pages/GoalsPage.jsx

import React from 'react';
import Navbar from '../components/Navbar';

function GoalsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Goals</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center">
              <p className="text-gray-500">The goals management feature is under construction. Come back soon!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GoalsPage;