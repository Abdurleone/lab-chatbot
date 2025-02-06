import React from "react";
import './ChatWindow.css';

function ChatWindow({ messages, isTyping }) {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          {message.text}
        </div>
      ))}
      {isTyping && <div className="message bot">Typing...</div>}
    </div>
  );
}

export default ChatWindow;