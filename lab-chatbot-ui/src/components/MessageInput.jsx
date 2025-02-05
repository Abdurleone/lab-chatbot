import React from "react";

const Message = ({ text, sender }) => {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`p-3 rounded-lg max-w-xs ${
          sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
