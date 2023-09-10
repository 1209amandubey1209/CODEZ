import React from 'react'
import AppMLSidebar from './Content/AppMLSidebar';
import './AppML.css'
import { Outlet } from 'react-router-dom';

function AppML() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><AppMLSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default AppML;