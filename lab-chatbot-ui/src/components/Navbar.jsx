import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Lab Chatbot</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/chatbox">Chatbox</Link></li>
        <li><Link to="/results">Results</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;