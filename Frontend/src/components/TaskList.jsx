import React, { useState } from 'react';
import TaskItem from './TaskItem';

const mockTasks = [
  { id: 1, text: 'Finish the project proposal for Q4', completed: false },
  { id: 2, text: 'Call the design agency to finalize mockups', completed: false },
  { id: 3, text: 'Review and approve the new marketing copy', completed: true },
  { id: 4, text: 'Book flight for the upcoming conference', completed: false },
];

function TaskList() {
    const [tasks, setTasks] = useState(initialTasks);

    const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Tasks</h3>
      <div>
        {mockTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;