import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function SubmitProject() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid  bgimage">
        <div className="innerDiv">
          <div className="displayprop">
            <p className="fyp m-0 p-0">FYP</p>
            <p className="teacherText  m-0 p-0 ">Submit Your Project</p>
            <div className="formContainer">
              <form >
                <div className='container-fluid mb-3 ' style={{width: "100%"}}>
               
                <select className="form-control select2" style={{width: "100%"}}>
                  <option className="supervisor">Choose Supervisor</option>
                  <option>Mr Inayat Ullah</option>
                  <option>Mr Dilawar Khan</option>
                  <option>Dr Amer Taj</option>
                  <option>Dr Zakira Inayat</option>
                  <option>Dr Ayesha Adeel</option>
                </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="teachername"
                    aria-describedby="emailHelp"
                    placeholder="Project Name"
                   
                  />
                </div>
                <div className="mb-3">
                <textarea class="form-control" aria-label="With textarea" placeholder='Project Description'></textarea>

                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="teachername"
                    aria-describedby="emailHelp"
                    placeholder="Member one"
                   
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="teachername"
                    aria-describedby="emailHelp"
                    placeholder="Member two"
                   
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="teachername"
                    aria-describedby="emailHelp"
                    placeholder="Member three"
                   
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="teachername"
                    aria-describedby="emailHelp"
                    placeholder="Member four"
                   
                  />
                </div>
                

                <Link>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary signinbtn" type="submit" onClick={()=>{
                      window.location.href= "http://localhost:3000/studenthomepage"
                    }}>
                      Submit
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
