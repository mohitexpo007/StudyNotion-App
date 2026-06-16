import Frame from "../assets/frame.png"
import Signinform from "./Signinform"
import Signupform from "./Signupform"

function Template({title,desc1,desc2,image,formtype,setisloggedin}){
  return(
    <div>

      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype==="signup"?
        (<Signupform setisloggedin={setisloggedin}></Signupform>):
        (<Signinform setisloggedin={setisloggedin}></Signinform>)}

          <div>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>

          <button>
            <p>Sign Up with Google</p>
          </button>
      </div>

      <div>
        <img src={Frame} width={558} height={504} loading="lazy"></img>
        <img src={image} width={558} height={490} loading="lazy"></img>
      </div>

    </div>
    
  )
}

export default Template;