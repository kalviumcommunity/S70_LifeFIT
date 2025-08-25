import React from 'react';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';


function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <TaskList />
            {/* We will add other components like Goals and Journal here later */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;