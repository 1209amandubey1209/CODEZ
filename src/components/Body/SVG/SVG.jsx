import React from 'react'
import SVGSidebar from './Content/SVGSidebar';
import './SVG.css'
import { Outlet } from 'react-router-dom';

function SVG() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><SVGSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default SVG