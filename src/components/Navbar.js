import { Link } from "react-router-dom"
import logo from "../assets/Logo.svg"

function Navbar(){
  return(
    <div>
      <Link to="/">
        <img src={logo}></img>
      </Link>
    </div>
  )
}

export default Navbar;