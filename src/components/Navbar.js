import { Link } from "react-router-dom"
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

function Navbar(props){
  const navigate=useNavigate();
  let isloggedin=props.isloggedin;
  let setisloggedin=props.setisloggedin;
  return(
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav className="flex gap-3">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/">About</Link></li>
        </ul>
        <ul>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>

      <div className="flex ml-5 mr-3 gap-3">
        {!isloggedin &&
          <Link to="/login">
            <button>
              Login
            </button>
          </Link>
        }
        {!isloggedin &&
          <Link to="/signup">
            <button>
              Sign Up
            </button>
          </Link>
        }
        {isloggedin &&
          <Link to="/">
            <button onClick={()=>{
              setisloggedin(false);
              toast.success("Logged Out");
            }}>
              Log Out
            </button>
          </Link>
        }
        {isloggedin &&
          <Link to="/dashboard">
            <button>
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar;