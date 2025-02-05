import React, { useState } from "react";

const InputBox = ({ sendMessage }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };

  return (
    <form className="p-4 bg-white shadow-md flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-grow p-2 border rounded-l-lg focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask something..."
      />
      <button className="bg-blue-500 text-white px-4 rounded-r-lg">Send</button>
    </form>
  );
};

export default InputBox;