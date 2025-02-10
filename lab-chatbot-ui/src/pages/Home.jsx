import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faCalendarCheck, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Chatbox from '../components/Chatbox';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Medical Lab Chatbot</h1>
        <p>Your one-stop solution for lab test inquiries, appointments, and results.</p>
      </header>
      <section className="home-content">
        <div className="home-card">
          <FontAwesomeIcon icon={faFlask} className="home-card-icon" />
          <h2>Inquire About Tests</h2>
          <p>Get information about available lab tests and their prices.</p>
          <Link to="/tests">Learn More</Link>
        </div>
        <div className="home-card">
          <FontAwesomeIcon icon={faCalendarCheck} className="home-card-icon" />
          <h2>Book Appointments</h2>
          <p>Schedule your lab test appointments with ease.</p>
          <Link to="/appointments">Book Now</Link>
        </div>
        <div className="home-card">
          <FontAwesomeIcon icon={faFileAlt} className="home-card-icon" />
          <h2>Get Results</h2>
          <p>Retrieve your lab test results quickly and securely.</p>
          <Link to="/results">Get Results</Link>
        </div>
      </section>
      <Chatbox />
    </div>
  );
}

export default Home;