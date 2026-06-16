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
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav className="text-white flex gap-x-6">
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

      <div className="flex items-center gap-4">
        {!isloggedin &&
          <Link to="/login">
            <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Log in
            </button>
          </Link>
        }
        {!isloggedin &&
          <Link to="/signup">
            <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign Up
            </button>
          </Link>
        }
        {isloggedin &&
          <Link to="/">
            <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
              setisloggedin(false);
              toast.success("Logged Out");
            }}>
              Log Out
            </button>
          </Link>
        }
        {isloggedin &&
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar;