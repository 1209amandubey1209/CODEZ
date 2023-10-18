import React from 'react'
import GoSidebar from './Content/GoSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function Go() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><GoSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default Go