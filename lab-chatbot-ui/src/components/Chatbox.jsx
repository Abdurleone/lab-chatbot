import React, { useState } from "react";
import "./Chatbox.css";

function Chatbox() {
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [input, setInput] = useState(""); // Stores user input
  const [isOpen, setIsOpen] = useState(false); // Toggles chat visibility

  // Handle sending a message
  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput("");

      try {
        // Send message to backend
        const response = await fetch("http://localhost:5000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        const botResponse = { text: data.reply, user: false };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Something went wrong. Please try again later.", user: false },
        ]);
      }
    }
  };

  // Handle pressing Enter to send
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Toggle chatbox visibility
  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="chatbox-toggle" onClick={toggleChatbox}>
        {isOpen ? "Close Chat" : "Chat with Us"}
      </button>
      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-content">
            <div className="chatbox-header">Chat with Us</div>
            <div className="chatbox-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chatbox-message ${message.user ? "user" : ""}`}
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
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbox;