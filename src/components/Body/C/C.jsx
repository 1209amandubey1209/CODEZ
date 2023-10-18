import React from 'react'
import CSidebar from './Content/CSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function C() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><CSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default C