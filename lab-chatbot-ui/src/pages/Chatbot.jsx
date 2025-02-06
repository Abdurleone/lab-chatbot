import { useState } from "react";
import axios from "axios";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);

  const handleSend = async (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", { message });
      setMessages((prev) => [...prev, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot" }]);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center">Medical Lab Chatbot</h2>
      <ChatWindow messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default Chatbot;