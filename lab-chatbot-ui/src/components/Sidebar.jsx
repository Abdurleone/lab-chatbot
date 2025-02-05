import React from "react";

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold">Lab Chatbot</h2>
      <ul className="mt-4 space-y-2">
        <li className="p-2 bg-gray-700 rounded">Chat</li>
        <li className="p-2 hover:bg-gray-700 rounded">Appointments</li>
        <li className="p-2 hover:bg-gray-700 rounded">Results</li>
      </ul>
    </div>
  );
};

export default Sidebar;