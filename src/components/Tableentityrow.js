import React from "react";
import '../css/tableentityrow.css';
import {BiEdit, BiShareAlt} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {SlOptionsVertical} from 'react-icons/sl';
import { Link } from "react-router-dom";
import Data from "../pages/Data";


export default function Tableentityrow() {
  const RowBox = (props) => {
    return (
        
       <tr className="trcolor ">
        <td scope="row ">
          <div className="form-check displaycenter  paddingtop">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
            />
           
          </div>
        </td>
        <td >
            <div className="studentbox">
                <div className="imagediv">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcg5OV7m4Ojt-6P7o0JwzgBcZosZwisJw0A&usqp=CAU" alt="" className="studentimage" />
                </div>
                <div className="nameEmailDiv">
                    <p className="studentname">{props.supervisor}</p>
                    <p className="studentEmail">{props.supervisorEmail}</p>
                </div>
            </div>
        </td>
        <td ><div className="batchdiv">
            {
              props.batch
            }
        </div></td>
        <td className="check"><div className="projectname">
               <Link to={props.path} className="projectnamelink"> <p> {props.projecttile}</p></Link>
        </div></td>
        <td>
            <div className="membersdiv">
               <p>1. {props.members.member1}</p>
               <p>2. {props.members.member2}</p>
              
            </div>
        </td>

        <td>
            <div className="alloptionsDiv">
                <div className="editdiv marginleft">{<BiEdit />}</div>
                <div className="sharediv marginleft">{<BiShareAlt />}</div>
                <div className="deletediv marginleft">{<RiDeleteBin6Line />}</div>
                <div className="menudiv marginleft">{<SlOptionsVertical />}</div>
            </div>
        </td>
      </tr>
        
    
    );
  };
  return (
    <tbody>
      
     
    {
      Data.map((val, ind)=>{
       return <RowBox supervisor={val.supervisor} path={val.path} projecttile={val.projectTitle} supervisorEmail={val.supervisorEmail} members={val.members} batch={val.batch}  />
      })
    }
     
      
    </tbody>
  );
}
