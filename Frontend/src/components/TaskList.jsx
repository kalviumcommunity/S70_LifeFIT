import React from 'react';
import TaskItem from './TaskItem';

const mockTasks = [
  { id: 1, text: 'Finish the project proposal for Q4', completed: false },
  { id: 2, text: 'Call the design agency to finalize mockups', completed: false },
  { id: 3, text: 'Review and approve the new marketing copy', completed: true },
  { id: 4, text: 'Book flight for the upcoming conference', completed: false },
];

function TaskList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Tasks</h3>
      <div>
        {mockTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;