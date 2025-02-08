import './ChatWindow.css';
import PropTypes from 'prop-types';

function ChatWindow({ messages, isTyping }) {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          {message.text}
        </div>
      ))}
      {isTyping && <div className="message bot">Typing...</div>}
    </div>
  );
}

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  isTyping: PropTypes.bool.isRequired,
};

export default ChatWindow;