import MessageBubble from "./MessageBubble";

function ChatWindow({ messages }) {
  return (
    <div className="p-4 border rounded-lg h-96 overflow-y-auto">
      {messages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}

export default ChatWindow;