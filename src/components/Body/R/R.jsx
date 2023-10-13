import React from 'react'
import RSidebar from './Content/RSidebar';
import './R.css'
import { Outlet } from 'react-router-dom';


function R() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><RSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default R