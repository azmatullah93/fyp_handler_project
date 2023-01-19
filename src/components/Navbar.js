import React from "react";
import '../css/navbar.css';
import {Link} from 'react-router-dom';
import { RiWindowLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to='/home'>
          FYP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto me-5">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to='/home'>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/allprojects'>
                PROJECTS
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/" >
                LOGIN
              </Link>
            </li>
           
           
          </ul>
         
          
          
            <div>
                
             { window.location.href === 'http://localhost:3000/studenthomepage' ?  <div >
                  <Link to='/submitproject' ><button type="button" class="btn  btn-primary custumbtn" >SUBMIT YOUR PROJECT </button></Link>
        
                  </div>: ""}
            </div>
           
          
        
        </div>
      </div>
    </nav>
  );
}
