import React from 'react'
import CSSSidebar from './Content/CSSSidebar';
import './CSS.css'
import { Outlet } from 'react-router-dom';

function CSS() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><CSSSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default CSS