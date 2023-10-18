import React from 'react'
import MySQLSidebar from './Content/MySQLSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function MySQL() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><MySQLSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default MySQL