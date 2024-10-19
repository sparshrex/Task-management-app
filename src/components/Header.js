import avatarImage from '../assets/Mask Group.png';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import headericon from '../assets/headericon.png'
import arrowicon from '../assets/arrow-down.png'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');



  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white shadow-md ">
      <div>
      <div className="flex  items-center space-x-4 ">
        
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search for anything..."
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 w-72"
          />
          
    
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        </div>


        </div>
         <span className=' cursor-pointer'> <img src={headericon} alt="" ></img></span> 
        <div className="flex items-center space-x-2 justify-items-end">
          <span className="font-semibold">Palak Jain</span>
          <img
            src={avatarImage}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className=' cursor-pointer'><img src={arrowicon} alt="" /></span>
        </div>
      
    </header>
  );
};

export default Header;
