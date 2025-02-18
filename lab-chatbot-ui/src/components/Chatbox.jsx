import React, { useState } from "react";
import "./Chatbox.css";

function Chatbox() {
  // Define state variables for input, messages, and toggling the chatbox
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [input, setInput] = useState(""); // Stores user input
  const [isOpen, setIsOpen] = useState(false); // Toggle chatbox open/close

  // Function to send user input to the backend
  const handleSendMessage = async () => {
    if (input.trim()) {
      // Add user message to the chatbox
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages); // Update the message state
      setInput(""); // Clear the input field

      try {
        // Send the user message to the backend chatbot API
        const response = await fetch("http://localhost:5000/api/chat/ai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }), // Send input as JSON
        });

        // Handle the response from the backend
        if (response.ok) {
          const data = await response.json();
          const botResponse = { text: data.reply, user: false }; // Add bot's reply
          setMessages((prevMessages) => [...prevMessages, botResponse]);
        } else {
          // Handle error if the backend fails
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Error: Could not fetch a response.", user: false },
          ]);
        }
      } catch (error) {
        // Handle network errors
        console.error("Error sending message:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Network error. Please try again.", user: false },
        ]);
      }
    }
  };

  // Handle "Enter" key press to send a message
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Toggle the chatbox visibility
  const toggleChatbox = () => {
    if (isOpen) {
      // Reset the chat messages when closing the chatbox
      setMessages([]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle button for chatbox */}
      <button className="chatbox-toggle" onClick={toggleChatbox}>
        {isOpen ? "Close Chat" : "Chat with Us"}
      </button>

      {/* Chatbox container */}
      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-content">
            <div className="chatbox-header">Chat with Us</div>

            {/* Chat messages */}
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

            {/* Input field and send button */}
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