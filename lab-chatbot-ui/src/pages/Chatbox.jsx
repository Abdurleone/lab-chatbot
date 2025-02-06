import { useState } from "react";
import axios from "axios";
import ChatWindow from "../components/ChatWindow.jsx";
import MessageInput from "../components/MessageInput.jsx";
import './Chatbox.css';

function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);
    setIsTyping(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", { message });
      setMessages((prev) => [...prev, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbox">
      <ChatWindow messages={messages} isTyping={isTyping} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default Chatbox;