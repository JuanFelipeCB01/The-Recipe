import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
      <Router>
        <div className="App">
        <Navbar/>
        
        <Routes />
        </div>
      </Router>
  );
}

export default App;
