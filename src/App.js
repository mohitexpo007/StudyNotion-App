import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";

function App() {
  const[isloggedin,setisloggedin]=useState(false);

  return(
    <div className="w-screen h-screen bg-richblack-900 slex flex-col">
      <Navbar isloggedin={isloggedin} setisloggedin={setisloggedin}/>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login setisloggedin={setisloggedin}/>}></Route>
        <Route path="/signup" element={<Signup setisloggedin={setisloggedin}></Signup>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route> 
      </Routes>

    </div>
    
  );
}

export default App;
