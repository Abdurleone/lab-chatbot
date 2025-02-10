import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Results from "./pages/Results.jsx";
import Tests from "./pages/Tests.jsx";
import Appointments from "./pages/Appointments.jsx";
import './App.css';

function AppRoutes() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/results" component={Results} />
            <Route path="/tests" component={Tests} />
            <Route path="/appointments" component={Appointments} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutes;