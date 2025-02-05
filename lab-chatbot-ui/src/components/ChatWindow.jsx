import { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I am still learning!", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded-lg max-w-xs ${msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white self-end"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;