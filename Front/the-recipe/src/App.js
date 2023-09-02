import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./shared/AuthContext";

import Routes from "./pages/Routes";
import Navbar from "./components/Navbar/Navbar";


function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
        <Navbar/>
        
        <Routes />
        </div>
      </Router> 
    </AuthProvider>      
  );
}

export default App;
