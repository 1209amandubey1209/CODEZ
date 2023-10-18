import React from 'react'
import CanvasSidebar from './Content/CanvasSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';

function Canvas() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><CanvasSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default Canvas