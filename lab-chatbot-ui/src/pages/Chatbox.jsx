import React, { useState } from 'react';
import './Chatbox.css';

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput('');

      // Simulate a chatbot response
      setTimeout(() => {
        let botResponse;
        if (input.toLowerCase().includes('test')) {
          botResponse = { text: 'We offer various lab tests including blood tests, urine tests, and X-rays.', user: false };
        } else if (input.toLowerCase().includes('appointment')) {
          botResponse = { text: 'You can book an appointment by providing your name and the test you need.', user: false };
        } else if (input.toLowerCase().includes('result')) {
          botResponse = { text: 'You can get your test results by providing your name.', user: false };
        } else {
          botResponse = { text: `You said: ${input}`, user: false };
        }
        setMessages([...newMessages, botResponse]);
      }, 1000);
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