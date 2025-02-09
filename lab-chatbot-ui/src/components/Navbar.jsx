import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/chatbox">Chatbox</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/tests">Tests</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;