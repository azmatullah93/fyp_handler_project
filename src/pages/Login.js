import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../css/login.css';

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid  bgimage">
      
        <div className="innerDiv" >
          <div className="displayprop">
            <p className="loginusText">LOGIN AS</p>
            <div className="buttonDiv">
               <Link to='/teacherlogin' >
               <button type="button" className="btn btn-primary samebtn ">
                TEACHER
              </button>
               </Link>
               <Link to='/studentlogin'>
               <button type="button" className="btn btn-primary samebtn ">
                STUDENT
              </button>
               </Link>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
