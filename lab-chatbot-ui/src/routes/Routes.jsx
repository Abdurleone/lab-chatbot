import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Chatbot from "../pages/Chatbot.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;