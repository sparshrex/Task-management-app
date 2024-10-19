import React from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import addicon from "../assets/add-square.png";
import Draggable from 'react-draggable';
import avatar1 from '../assets/Ellipse14.png'
import avatar2 from '../assets/Ellipse12.png'

// Mapping priorities to colors
const priorityColors = {
  Low: { background: 'bg-yellow-200', text: 'text-yellow-600' },
  Medium: { background: 'bg-orange-200', text: 'text-orange-600' },
  High: { background: 'bg-red-200', text: 'text-red-600' },
};

const TaskSection = ({ title, tasks, filter, color, onDrop }) => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const taskTitle = prompt("Enter task title:");
    const taskDescription = prompt("Enter task description:");

    if (taskTitle && taskDescription) {
      const newTask = {
        id: Math.random(), // Generating a random ID for new tasks
        title: taskTitle,
        description: taskDescription,
        priority: "Low", // Default priority for new tasks
        priorityColor: "yellow",
        comments: 0,
        files: 0,
        members: [
          {
            id: 1,
            name: "John",
            avatar: avatar2,
          },
          {
            id: 2,
            name: "Jane",
            avatar: avatar1,
          },
        ],
      };

      dispatch(addTask(newTask));
    }
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.priority === filter);

  return (
    <div className="w-[300px] bg-gray-100">
      <div className="flex justify-between items-center mb-2">
        <h2 className={`text-lg font-semibold text-gray-800`}>{title}</h2>
        <span className="text-sm text-gray-500">{filteredTasks.length}</span>
        {title === "To Do" && (
          <span>
            <button onClick={handleAddTask} className="">
              <img src={addicon} alt="Add task" />
            </button>
          </span>
        )}
      </div>
      <div className={`border-t-2 ${color} mb-4`} />

      {filteredTasks.map((task) => (
        <Draggable key={task.id}>
          <div
            className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm cursor-grab"
            onDrop={(e) => {
              e.preventDefault();
              onDrop(task);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex justify-between items-center mb-2">
              <span
                className={`${priorityColors[task.priority].background} ${priorityColors[task.priority].text} text-xs px-2 py-1 rounded-full`}
              >
                {task.priority}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{task.title}</h3>
            <p className="text-gray-500 text-sm">{task.description}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex -space-x-2">
                {task.members.map((member) => (
                  <img
                    key={member.id}
                    src={member.avatar}
                    alt={member.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                {task.comments} comments {task.files} files
              </div>
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default TaskSection;
