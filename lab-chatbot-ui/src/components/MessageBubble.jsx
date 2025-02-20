import PropTypes from 'prop-types';

function MessageBubble({ text, sender }) {
    const isUser = sender === "user";
    return (
      <div className={`p-2 m-2 rounded-lg ${isUser ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
        <p>{text}</p>
      </div>
    );
}

MessageBubble.propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
};

export default MessageBubble;