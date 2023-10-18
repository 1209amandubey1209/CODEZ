import React from 'react'
import JSONSidebar from './Content/JSONSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';

function JSON() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><JSONSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default JSON;