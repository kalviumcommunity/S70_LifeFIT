// frontend/src/pages/DashboardPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';

function DashboardPage() {
  const [userInput, setUserInput] = useState(''); // State for the user's input
  const [suggestions, setSuggestions] = useState(''); // State for the AI's response
  const [isLoading, setIsLoading] = useState(false);

  const getSuggestions = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (!userInput) return; // Don't submit if input is empty

    setIsLoading(true);
    setSuggestions(''); // Clear previous suggestions
    try {
      const response = await axios.post('http://localhost:8000/api/generate', { userInput });
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions("Sorry, couldn't fetch suggestions right now. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* AI Productivity Assistant Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Productivity Assistant</h3>
            <p className="text-gray-600 mb-4">Feeling stuck? Describe your problem below to get some helpful tips.</p>
            
            <form onSubmit={getSuggestions}>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., I'm having trouble focusing today."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              >
                {isLoading ? 'Getting Tips...' : 'Get Tips'}
              </button>
            </form>

            {suggestions && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Here are a few ideas:</h4>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                  {suggestions}
                </div>
              </div>
            )}
          </div>
          
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;