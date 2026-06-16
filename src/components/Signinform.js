import { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signinform({setisloggedin}){

  const navigate=useNavigate();

  const[formdata,setformdata]=useState({email:"",pass:""});

  const[showpassword,setshowpassword]=useState(false);

  function changehandler(event){
    const{name,value,type}=event.target;
    setformdata((prevdata)=>({
      ...prevdata,
      [name]:value
    }))
  }

  function submithandler(event){
    event.preventDefault();
    setisloggedin(true)
    toast.success("Logged in")
    navigate("/dashboard")
  }

  return(
    <form onSubmit={submithandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={formdata.email}
          onChange={changehandler}
          placeholder="Enter Email id">
        </input>
      </label>
      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          type={showpassword?("text"):("password")}
          name="pass"
          value={formdata.pass}
          onChange={changehandler}
          placeholder="Enter Password">
        </input>

        <span onClick={()=>{
          setshowpassword((prev)=>!prev)
        }}>
          {showpassword?
          (<AiOutlineEyeInvisible/>):
          (<AiOutlineEye></AiOutlineEye>)}
        </span>

        <Link to="#">
            <p>
              Forgot Password
            </p>
        </Link>
      </label>

      <button>
        Sign In
      </button>
    </form>
  )
}

export default Signinform;