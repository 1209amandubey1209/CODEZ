import React from 'react'
import CSidebar from './Content/CSidebar';
import './C.css'
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