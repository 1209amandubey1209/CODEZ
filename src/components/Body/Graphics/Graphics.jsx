import React from 'react'
import GraphicsSidebar from './Content/GraphicsSidebar';
import './Graphics.css'
import { Outlet } from 'react-router-dom';

function Graphics() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><GraphicsSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default Graphics