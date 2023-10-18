import React from 'react'
import AJAXSidebar from './Content/AJAXSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';

function AJAX() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><AJAXSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default AJAX;