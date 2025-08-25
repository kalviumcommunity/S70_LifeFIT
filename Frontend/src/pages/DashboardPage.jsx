// frontend/src/pages/DashboardPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';

function DashboardPage() {
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const systemPrompt = "You are an AI assistant named LifeFIT";
const [strategyInput, setStrategyInput] = useState('');
  const [strategyResponse, setStrategyResponse] = useState('');
  const [isStrategyLoading, setIsStrategyLoading] = useState(false);
  const [functionInput, setFunctionInput] = useState('');
  const [functionResponse, setFunctionResponse] = useState(null); 
  const [isFunctionLoading, setIsFunctionLoading] = useState(false);
  const [multiShotInput, setMultiShotInput] = useState('');
  const [multiShotResponse, setMultiShotResponse] = useState('');
  const [isMultiShotLoading, setIsMultiShotLoading] = useState(false);


  const handleFunctionCallSubmit = async (e) => {
    e.preventDefault();
    if (!functionInput || isFunctionLoading) return;

    setIsFunctionLoading(true);
    setFunctionResponse(null);
    try {
      const response = await axios.post('http://localhost:8000/api/createtasks', { userInput: functionInput });
      setFunctionResponse(response.data);
    } catch (error) {
      console.error("Error fetching function call:", error);
      setFunctionResponse({ error: "Sorry, couldn't generate a task plan right now." });
    }
    setIsFunctionLoading(false);
  };

  const getSuggestions = async (e) => {
    e.preventDefault();
    if (!userInput) return; 

    setIsLoading(true);
    setSuggestions(''); 
    try {
      const response = await axios.post('http://localhost:8000/api/generate', { userInput });
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions("Sorry, couldn't fetch suggestions right now. Please try again.");
    }
    setIsLoading(false);
  };

   const handleStrategySubmit = async (e) => {
    e.preventDefault();
    if (!strategyInput || isStrategyLoading) return;

    setIsStrategyLoading(true);
    setStrategyResponse('');
    try {
      const response = await axios.post('http://localhost:8000/api/strategy', { userInput: strategyInput });
      setStrategyResponse(response.data.strategy);
    } catch (error) {
      console.error("Error fetching strategy:", error);
      setStrategyResponse("Sorry, couldn't fetch a strategy right now.");
    }
    setIsStrategyLoading(false);
  };

  const handleMultiShotSubmit = async (e) => {
    e.preventDefault();
    if (!multiShotInput || isMultiShotLoading) return;

    setIsMultiShotLoading(true);
    setMultiShotResponse('');
    try {
      const response = await axios.post('http://localhost:8000/api/affirmation', { userInput: multiShotInput });
      setMultiShotResponse(response.data.response);
    } catch (error) {
      console.error("Error fetching multi-shot response:", error);
      setMultiShotResponse("Sorry, couldn't get a response right now.");
    }
    setIsMultiShotLoading(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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

    </div>
             <div className="bg-white p-6 rounded-lg shadow-md mt-10 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Get a Goal Strategy</h3>
            <p className="text-gray-600 mb-4">Describe a productivity challenge to get a step-by-step plan.</p>
            <form onSubmit={handleStrategySubmit}>
              <textarea
                value={strategyInput}
                onChange={(e) => setStrategyInput(e.target.value)}
                placeholder="e.g., I always procrastinate on big projects"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <button
                type="submit"
                disabled={isStrategyLoading}
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
              >
                {isStrategyLoading ? 'Thinking...' : 'Get Strategy'}
              </button>
            </form>
            {strategyResponse && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Here's a strategic approach:</h4>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap font-sans">
                  {strategyResponse}
                </div>
              </div>
            )}
          </div>
      

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI Task Creator</h3>
            <p className="text-gray-600 mb-4">Describe a goal, and the AI will generate a structured task plan.</p>
            <form onSubmit={handleFunctionCallSubmit}>
              <textarea
                value={functionInput}
                onChange={(e) => setFunctionInput(e.target.value)}
                placeholder="e.g., Organize my garage this weekend"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <button
                type="submit"
                disabled={isFunctionLoading}
                className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-gray-400"
              >
                {isFunctionLoading ? 'Generating Plan...' : 'Generate Task Plan'}
              </button>
            </form>
            {functionResponse && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Generated Function Call:</h4>
                <pre className="bg-gray-900 text-white p-4 rounded-md whitespace-pre-wrap text-sm">
                  <code>{JSON.stringify(functionResponse, null, 2)}</code>
                </pre>
              </div>
            )}
          </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Get an Affirmation & First Steps</h3>
            <p className="text-gray-600 mb-4">State a goal to get a dose of encouragement and a simple plan.</p>
            <form onSubmit={handleMultiShotSubmit}>
              <textarea
                value={multiShotInput}
                onChange={(e) => setMultiShotInput(e.target.value)}
                placeholder="e.g., I want to read more books"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <button
                type="submit"
                disabled={isMultiShotLoading}
                className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors disabled:bg-gray-400"
              >
                {isMultiShotLoading ? 'Inspiring...' : 'Inspire Me'}
              </button>
            </form>
            {multiShotResponse && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Here's a thought:</h4>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap font-sans">
                  {multiShotResponse}
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