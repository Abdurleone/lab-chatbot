import { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={handleSubmit} className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="input"
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
}
MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default MessageInput;