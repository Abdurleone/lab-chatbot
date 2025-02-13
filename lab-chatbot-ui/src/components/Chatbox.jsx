const handleSendMessage = async () => {
  if (input.trim()) {
    const newMessages = [...messages, { text: input, user: true }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse = { text: data.reply, user: false };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } else if (response.status === 400) {
        const errorData = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `Error: ${errorData.error}`, user: false },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Something went wrong. Please try again later.", user: false },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Network error. Please check your connection.", user: false },
      ]);
    }
  }
};