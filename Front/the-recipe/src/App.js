import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
      <Router>
        <div>
        <Navbar className="absolute"/>
        
        <Routes className="mt-100" />
        </div>
      </Router>
  );
}

export default App;
