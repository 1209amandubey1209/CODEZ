import React from 'react'
import ColorsSidebar from './Content/ColorsSidebar';
import './Colors.css'
import { Outlet } from 'react-router-dom';

function Colors() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><ColorsSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default Colors