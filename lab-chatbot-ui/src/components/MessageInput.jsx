import { useState } from "react";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input 
        type="text" 
        className="border p-2 w-full rounded-lg"
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type a message..."
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Send</button>
    </form>
  );
}

export default MessageInput;