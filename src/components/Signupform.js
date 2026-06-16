import { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Signupform({setisloggedin}){

  const navigate=useNavigate();

  const[formdata,setformdata]=useState({firstname:"",lastname:"",email:"",pass:"",confirmpassword:""})

  function changehandler(event){
    setformdata((prevdata)=>({
      ...prevdata,
      [event.target.name]:event.target.value
    }))
  }

  function submithandler(event){
    event.preventDefault();
    if(formdata.pass!=formdata.confirmpassword){
      toast.error("Password does not match")
      return
    }
    else{
      toast.success("Signup Successful")
      setisloggedin(true);
      navigate("/dashboard")
    }
    
  }

  const[showpassword,setshowpassword]=useState(false);
  const[showpassword2,setshowpassword2]=useState(false);
  return(
    <div>
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submithandler}>

        <div>
          <label>
            <p>First Name <sup>*</sup></p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changehandler}
              value={FormData.firstname}
              placeholder="Enter First Name"
            />
          </label>
          <label>
            <p>Last Name <sup>*</sup></p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changehandler}
              value={FormData.lastname}
              placeholder="Enter Last Name"
            />
          </label>

          <label>
            <p>Email <sup>*</sup></p>
            <input
              required
              type="text"
              name="email"
              onChange={changehandler}
              value={FormData.email}
              placeholder="Enter your Email"
            />
          </label>

          <label>
            <p>Create Password<sup>*</sup></p>
            <input
              required
              type={showpassword?("text"):("password")}
              name="pass"
              onChange={changehandler}
              value={FormData.pass}
              placeholder="Enter Password"
            />
            <span onClick={()=>{
                      setshowpassword((prev)=>!prev)
                    }}>
                      {showpassword?
                      (<AiOutlineEyeInvisible/>):
                      (<AiOutlineEye></AiOutlineEye>)}
            </span>
          </label>

          <label>
            <p>Confirm Password <sup>*</sup></p>
            <input
              required
              type={showpassword2?("text"):("password")}
              name="confirmpassword"
              onChange={changehandler}
              value={FormData.confirmpassword}
              placeholder="Confirm Password"
            />
            <span onClick={()=>{
                      setshowpassword2((prev)=>!prev)
                    }}>
                      {showpassword2?
                      (<AiOutlineEyeInvisible/>):
                      (<AiOutlineEye></AiOutlineEye>)}
                    </span>
          </label>


        </div>
        <button>
          Create Account
        </button>
      

      </form>
    </div>
  )
}

export default Signupform;