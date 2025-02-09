import React, { useState } from 'react';
import './Chatbox.css';

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-content">
        <div className="chatbox-header">Chat with Us</div>
        <div className="chatbox-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbox-message ${message.user ? 'user' : ''}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbox-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;