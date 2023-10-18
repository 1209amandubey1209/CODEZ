import React from 'react'
import SQLSidebar from './Content/SQLSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function SQL() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><SQLSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default SQL