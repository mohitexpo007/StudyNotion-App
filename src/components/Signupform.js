import { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Signupform({setisloggedin}){

  const navigate=useNavigate();

  const[Formdata,setformdata]=useState({firstname:"",lastname:"",email:"",pass:"",confirmpassword:""})

  function changehandler(event){
    setformdata((prevdata)=>({
      ...prevdata,
      [event.target.name]:event.target.value
    }))
  }

  function submithandler(event){
    event.preventDefault();
    if(Formdata.pass!=Formdata.confirmpassword){
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
  const[accounttype,setaccounttype]=useState("Student")
  return(
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button onClick={()=> setaccounttype("Student")}
          className={`${accounttype==="Student"?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition all duration-200`}
          >
          Student
        </button>
        <button
        className={`${accounttype==="instructor"?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition all duration-200`}
        onClick={()=> setaccounttype("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submithandler} className="flex flex-col w-full gap-y-4 mt-6">

        <div>
          <div className="flex justify-between gap-x-3 mt-[20px]">
            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
              <input
                required
                type="text"
                name="firstname"
                onChange={changehandler}
                value={FormData.firstname}
                placeholder="Enter First Name"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
            </label>
            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
              <input
                required
                type="text"
                name="lastname"
                onChange={changehandler}
                value={FormData.lastname}
                placeholder="Enter Last Name"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
            </label>
          </div>
          
          <div className="mt-[20px]">
            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email <sup className="text-pink-200">*</sup></p>
              <input
                required
                type="text"
                name="email"
                onChange={changehandler}
                value={FormData.email}
                placeholder="Enter your Email"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
            </label>
          </div>
          
          <div className="flex justify-between gap-x-3 mt-[20px]">
              <label className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
              <input
                required
                type={showpassword?("text"):("password")}
                name="pass"
                onChange={changehandler}
                value={FormData.pass}
                placeholder="Enter Password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
              <span onClick={()=>{
                        setshowpassword((prev)=>!prev)
                      }} className="absolute right-3 top-[35px] cursor-pointer">
                        {showpassword?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
              </span>
            </label>

            <label className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-200">*</sup></p>
              <input
                required
                type={showpassword2?("text"):("password")}
                name="confirmpassword"
                onChange={changehandler}
                value={FormData.confirmpassword}
                placeholder="Confirm Password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
              <span className="absolute right-3 top-[35px] cursor-pointer" onClick={()=>{
                        setshowpassword2((prev)=>!prev)
                      }}>
                        {showpassword2?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                      </span>
            </label>

          </div>
          


        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      

      </form>
    </div>
  )
}

export default Signupform;