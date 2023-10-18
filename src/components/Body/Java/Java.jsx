import React from 'react'
import JavaSidebar from './Content/JavaSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function Java() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><JavaSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default Java