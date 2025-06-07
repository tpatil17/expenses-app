import React from "react";
import { Home, User, Settings } from "lucide-react";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 h-[calc(100vh-4rem)]">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onClose} className="text-white text-xl">✕</button>
      </div>

      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
          <User size={20} /> Profile
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
          <Home size={20} /> Analytics
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
          <Home size={20} /> Add Expense
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
          <Home size={20} /> Alerts
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
          <Settings size={20} /> Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
