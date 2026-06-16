import signupimg from "../assets/signup.png"
import Template from "../components/Template";
const Signup=({setisloggedin})=>{
  return(
    <Template 
          title="Join the millions learning to code with StudyNotion for free"
          desc1="Build skills for today,tomorrow and beyond"
          desc2="Education to future-proof your career"
          image={signupimg}
          formtype="signup"
          setisloggedin={setisloggedin}
        ></Template>
  )
}

export default Signup;