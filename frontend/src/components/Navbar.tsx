import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-pastel-blue to-pastel-pink rounded-md flex items-center justify-center text-white font-bold">
          MIP
        </div>
        <ul className="flex space-x-6 ml-6">
          <li className="hover:text-pastel-pink cursor-pointer">Home</li>
          <li className="hover:text-pastel-pink cursor-pointer">Dashboard</li>
          <li className="hover:text-pastel-pink cursor-pointer">Market</li>
        </ul>
      </div>
      <input type="text" placeholder="Search" className="p-2 rounded-md border border-gray-300" />
    </nav>
  );
};

export default Navbar;