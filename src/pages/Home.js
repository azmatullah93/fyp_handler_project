import React from 'react'
import HeroComponent from '../components/Herocomponent'
import Navbar from '../components/Navbar';
import Projectslist from '../components/Projectslist';


export default function Home() {
  return (<>
    <Navbar />
   
    <HeroComponent />
    <Projectslist />
    </>
  )
}
