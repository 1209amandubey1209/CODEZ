import React from 'react'
import BootstrapSidebar from './Content/BootstrapSidebar';
import './Bootstrap.css'
import { Outlet } from 'react-router-dom';


function Bootstrap() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><BootstrapSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default Bootstrap