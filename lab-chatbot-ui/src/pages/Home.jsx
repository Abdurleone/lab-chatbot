import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to the Medical Lab Chatbot</h1>
      <p className="mt-4">Get instant responses to your lab-related inquiries.</p>
      <Link to="/chatbot" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
        Start Chat
      </Link>
    </div>
  );
}

export default Home;