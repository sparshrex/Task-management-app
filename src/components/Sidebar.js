// import { HomeIcon, ChatIcon, ClipboardListIcon, UsersIcon, CogIcon } from '@heroicons/react/outline';
import task from "../assets/task-square.png"
import message from "../assets/message.png"
import setting from "../assets/setting-2.png"
import home from "../assets/category.png"
import sidebaricon from "../assets/Group 7.png"
import bulbIcon from "../assets/lamp-on.png"
import backicon from "../assets/backicon.png"
const Sidebar = () => {
  return (
    <div className="w-64 bg-white  h-screen p-4  overflow-y-auto shadow-md">
      
      <div className=" flex justify-between h-8" >
      <img src={sidebaricon} alt=""></img>
      <h2 className="text-xl font-semibold mb-8">Project M.</h2>
      <span className=" flex items-center cursor-pointer "><img src={backicon} alt="" /></span>
      </div>
      <nav className="mt-4 space-y-6">
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black">
       
          <img src={home} alt="home"/>
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black">
        <img src={message} alt="message"/>
          <span>Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black">
        <img src={task} alt="task"/>
          <span>Tasks</span>
        </a>
      
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black">
        <img src={setting} alt="setting"/>
          <span>Settings</span>
        </a>
      </nav>
    <div className=" mt-8 h-2 shadow-md "></div>
      <h3 className="mt-8 text-sm font-semibold text-gray-500 mb-4">My Projects</h3>
      <nav className="space-y-6">
        <a href="#" className="text-purple-600 flex items-center space-x-3">
          <span className="block w-2 h-2 bg-purple-600 rounded-full"></span>
          <span>Mobile App</span>
        </a>
        <a href="#" className="text-gray-600 flex items-center space-x-3">
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
          <span>Website Redesign</span>
        </a>
        <a href="#" className="text-gray-600 flex items-center space-x-3">
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
          <span>Design System</span>
        </a>
        <a href="#" className="text-gray-600 flex items-center space-x-3">
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
          <span>Wireframes</span>
        </a>
      </nav>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center shadow-sm">
        <div className="flex justify-center mb-2">
          <img src={bulbIcon} alt="Bulb icon" className="w-10 h-10" />
        </div>
        <h4 className="text-lg font-semibold">Thoughts Time</h4>
        <p className="text-gray-500 mt-2 mb-4">
          We don’t have any notice for you, till then you can share your thoughts with your peers.
        </p>
        <button className="bg-white border border-gray-300 py-2 px-4 rounded-lg text-black font-semibold">
          Write a message
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
