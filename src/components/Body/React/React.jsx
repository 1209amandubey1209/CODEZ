import React from 'react'
import ReactSidebar from './Content/ReactSidebar';
import './React.css'
import { Outlet } from 'react-router-dom';

function Reactjs() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><ReactSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default Reactjs;