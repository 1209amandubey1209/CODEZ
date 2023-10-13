import React from 'react'
import PythonSidebar from './Content/PythonSidebar';
import './Python.css'
import { Outlet } from 'react-router-dom';


function Python() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><PythonSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default Python