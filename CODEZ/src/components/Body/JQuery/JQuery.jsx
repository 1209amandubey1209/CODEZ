import React from 'react'
import JQuerySidebar from './Content/JQuerySidebar';
import './JQuery.css'
import { Outlet } from 'react-router-dom';

function JQuery() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><JQuerySidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default JQuery;