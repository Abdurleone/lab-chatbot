import React, { useState } from "react";
import "./Chatbox.css";

function Chatbox() {
  // Define state variables for input, messages, and toggling the chatbox
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput("");

      try {
        const response = await fetch("http://localhost:5000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        });

        if (response.ok) {
          const data = await response.json();
          const botResponse = { text: data.reply, user: false };
          setMessages((prevMessages) => [...prevMessages, botResponse]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Error: Could not fetch a response.", user: false },
          ]);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Network error. Please try again.", user: false },
        ]);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

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