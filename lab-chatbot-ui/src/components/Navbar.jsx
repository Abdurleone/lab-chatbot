import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <h1 className="text-xl font-bold">Lab Chatbot</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;