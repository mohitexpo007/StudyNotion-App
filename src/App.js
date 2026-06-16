import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

function App() {
  return(
    <div>
      <Navbar/>

      <Routes>
        <Route to="/" element={<Home></Home>}></Route>
        <Route to="/login" element={<Login/>}></Route>
        <Route to="/signup" element={<Signup></Signup>}></Route>
        <Route to="/dashboard" element={<Dashboard></Dashboard>}></Route> 
      </Routes>

    </div>
    
  );
}

export default App;
