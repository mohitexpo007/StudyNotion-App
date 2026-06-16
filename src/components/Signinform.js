import { useState } from "react"
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";

function Signinform(){

  const[formdata,setformdata]=useState({email:"",pass:""});

  const[showpassword,setshowpassword]=useState(false);

  function changehandler(event){
    const[name,value,type]=event.target;
    setformdata((prevdata)=>({
      ...prevdata,
      [name]:value
    }))
  }

  return(
    <form>
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