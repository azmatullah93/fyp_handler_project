import React from "react";
import "../css/projectlist.css";
import Tableentityrow from "./Tableentityrow";




export default function Projectslist() {


  return (
    <div className="container-fluid p-0 m-0 containerbg">
      <div className=" projectsinnercontainer pb-5" >
        <div className="container text-center">
          <p className="projectsText">FINAL YEAR PROJECTS</p>
        </div>
        <div className="container tableContainer">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Supervisor Name</th>
                <th scope="col">Batch</th>
                <th scope="col">Project Name</th>
                <th scope="col">Members</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <Tableentityrow />
          </table>
        </div>
      </div>
    </div>
  );
}
