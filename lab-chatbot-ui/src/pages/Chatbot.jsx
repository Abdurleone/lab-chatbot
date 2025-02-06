import { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);

  const handleSend = (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);

    // Simulating bot response (replace with real API later)
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I'm still learning. Ask me anything!", sender: "bot" }]);
    }, 1000);
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