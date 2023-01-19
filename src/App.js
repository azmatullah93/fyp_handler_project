import React from 'react'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Teacherlogin from './pages/Teacherlogin';
import Studentlogin from './pages/Studentlogin';
import Projects from './pages/OnlineAss';
import Allprojects from './pages/Allprojects';
import StudentHomepage from './pages/StudentHomepage';
import SubmitProject from './pages/SubmitProject';
import OnlineAss from './pages/OnlineAss';
import Scalable from './pages/Scalable';
import Shopping from './pages/Shooping';
import Elearning from './pages/Elearning';
import Android from './pages/Andriod';

export default function App() {
  return (
    

    <Routes>
  <Route path="/" element={<Login />} />
  <Route path='/home' element={<Home />}></Route>
  <Route path='/teacherlogin' element={<Teacherlogin />}></Route>
  <Route path='/studentlogin' element={<Studentlogin />}></Route>
  <Route path='/projectpage' element={<Projects />}></Route>
  <Route path='/allprojects' element={<Allprojects />}></Route>
  <Route path='/studenthomepage' element={<StudentHomepage />}></Route>
  <Route path='/submitproject' element={<SubmitProject />}></Route>
  <Route path='/onlineass' element={<OnlineAss />}></Route>
  <Route path='/scalable' element={<Scalable />}></Route>
  <Route path='/shopping' element={<Shopping />}></Route>
  <Route path='/elearning' element={<Elearning />}></Route>
  <Route path='/andriod' element={<Android />}></Route>

 </Routes>

  )
}
