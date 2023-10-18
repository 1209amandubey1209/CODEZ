import React from 'react'
import AngularJSSidebar from './Content/AngularJSSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';

function AngularJS() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><AngularJSSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default AngularJS;