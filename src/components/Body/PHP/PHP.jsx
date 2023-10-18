import React from 'react'
import PHPSidebar from './Content/PHPSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function PHP() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><PHPSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default PHP