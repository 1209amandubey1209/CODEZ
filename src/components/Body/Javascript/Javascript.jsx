import React from 'react'
import JavascriptSidebar from './Content/JavascriptSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';

function Javascript() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><JavascriptSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default Javascript;