import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Use Switch instead of Routes
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Chatbox from "./pages/Chatbox.jsx";
import Navbar from "./components/Navbar.jsx";
import Results from "./pages/Results.jsx"; // Add the .jsx extension
import './App.css';

function AppRoutes() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-content">
          <Switch> {/* Use Switch instead of Routes */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/chatbox" component={Chatbox} />
            <Route path="/results" component={Results} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutes;