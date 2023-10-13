import React from 'react'
import KotlinSidebar from './Content/KotlinSidebar';
import './Kotlin.css'
import { Outlet } from 'react-router-dom';


function Kotlin() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><KotlinSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default Kotlin