import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Use Switch instead of Routes
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Chatbox from "./pages/Chatbox.jsx";
import Navbar from "./components/Navbar.jsx";
import Results from "./pages/Results.jsx";
import Tests from "./pages/Tests.jsx"; // Add the Tests component
import Appointments from "./pages/Appointments.jsx"; // Add the Appointments component
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
            <Route path="/tests" component={Tests} /> {/* Add the Tests route */}
            <Route path="/appointments" component={Appointments} /> {/* Add the Appointments route */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutes;