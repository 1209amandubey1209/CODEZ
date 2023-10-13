import React from 'react'
import IconsSidebar from './Content/IconsSidebar';
import './Icons.css'
import { Outlet } from 'react-router-dom';

function Icons() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><IconsSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default Icons