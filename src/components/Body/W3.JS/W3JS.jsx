import React from 'react'
import W3JSSidebar from './Content/W3JSSidebar';
import './W3JS.css'
import { Outlet } from 'react-router-dom';

function W3JS() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><W3JSSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default W3JS;