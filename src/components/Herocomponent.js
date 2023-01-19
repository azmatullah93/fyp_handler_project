import React from "react";
import "../css/herocontainer.css";
import $ from 'jquery';
import { Link } from "react-router-dom";

export default function Herocomponent() {
  

  return (
    <div className="container-fluid p-0 m-0 herocontainer">
      <div className="container innerCont">
        <div className="searchOuterContainer">
          
            <div className="row columnprop" >
              <form className="  col-sm-12 col-lg-3  divWidth">
                <label className="searchLabel">Supervised by whome?</label>
                <select className="form-control select2">
                  <option className="supervisor">Supervisor ?</option>
                  <option>Mr Inayat Ullah</option>
                  <option>Mr Dilawar Khan</option>
                  <option>Dr Amer Taj</option>
                  <option>Dr Zakira Inayat</option>
                  <option>Dr Ayesha Adeel</option>
                </select>
              </form>

              <form className=" col-sm-12 col-lg-3 divWidth">
                <label className="searchLabel">Project Name</label>
                <select className="form-control select2">
                  <option>By Name</option>
                  <option>Online-Assessment proctoring</option>
                  <option>Scalable Automated Assessment System</option>
                  <option>Shopping Site</option>
                  <option>e-Learning platform</option>
                  <option>Android task monitoring</option>
                </select>
              </form>

              <form className=" col-sm-12 col-lg-3 divWidth">
                <label className="searchLabel" for="batchyear">Batch</label>
                <input type="number" class="form-control" name="batchyear" id="batchyear" placeholder="Enter Year" />
                
                
              </form>

              <div className=" col-sm-12 col-lg-3 searchbtn">
              <Link to='/allprojects'>
              <button type="button" class="btn btn-primary">SEARCH NOW</button>
              </Link>

              </div>
            </div>
          

        
        </div>

        <div className="projectOuterContainer">
        <div className="container-fluid ">
            <p className="topProjectText">TOP PROJECTS</p>
            <div className="container">

            
            <div className=" changedisply ">
                <div className="projectBox">
                    <div className="imagdiv">
                        <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q1/why-pm-is-important/why-is-project-management-important-header@2x.png" alt="" className="projectimage" />
                    </div>
                    <div className="descriptbox">
                        <p>DESCRIPTION</p>
                    </div>
                </div>

                <div className="projectBox">
                    <div className="imagdiv">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKCFSAsxnL_A7T3R1yCn12YfAsS905XKxUw&usqp=CAU" alt="" className="projectimage" />
                    </div>
                    <div className="descriptbox">
                        <p>DESCRIPTION</p>
                    </div>
                </div>

                <div className="projectBox">
                    <div className="imagdiv">
                        <img src="https://www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg" alt="" className="projectimage" />
                    </div>
                    <div className="descriptbox">
                        <p>DESCRIPTION</p>
                    </div>
                </div>

                <div className="projectBox">
                    <div className="imagdiv">
                        <img src="https://cdn-cashy-static-assets.lucidchart.com/marketing/blog/2017Q3/phases-project-management-lifecycle/phases-project-management-lifecycle-header.png" alt="" className="projectimage" />
                    </div>
                    <div className="descriptbox">
                        <p>DESCRIPTION</p>
                    </div>
                </div>

                
            </div>
            </div>
        </div>
        
        </div>
      </div>
    </div>
  );
}
