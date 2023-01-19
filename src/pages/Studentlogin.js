import  {React, useState} from "react";
import "../css/teacher.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function Studentlogin() {
  let [myemail, setmyemail] = useState("");

  return (
    <div>
      <Navbar />
      <div className="container-fluid  bgimage">
        <div className="innerDiv">
          <div className="displayprop">
            <p className="fyp m-0 p-0">FYP</p>
            <p className="teacherText  m-0 p-0 ">STUDENT LOGIN</p>
            <div className="formContainer">
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    onChange={(e)=>{
                      let emailll = e.target.value;
                      setmyemail(emailll);
                      
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              

                <Link>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary signinbtn" type="submit"  onClick={()=>{
                     if( myemail==="wajidalikhan@gmail.com"){
                      window.location.href="http://localhost:3000/studenthomepage"
                     }
                    }}>
                      Sign in
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
