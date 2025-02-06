import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Chatbox from "./pages/Chatbox.jsx";
import Navbar from "./components/Navbar.jsx";
import './App.css';

function AppRoutes() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chatbox" element={<Chatbox />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutes;