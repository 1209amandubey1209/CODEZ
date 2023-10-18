import React from 'react'
import W3CSSSidebar from './Content/W3CSSSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function W3CSS() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><W3CSSSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default W3CSS