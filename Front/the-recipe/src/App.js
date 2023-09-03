import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./shared/AuthContext";

import Routes from "./pages/Routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <AuthProvider>
      <Router>
        <div>
        <Navbar className="absolute"/>
        
        <Routes className="mt-100" />

        <Footer/>
        </div>
      </Router> 
    </AuthProvider>      
  );
}

export default App;
