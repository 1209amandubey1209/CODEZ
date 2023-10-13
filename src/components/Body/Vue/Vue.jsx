import React from 'react'
import VueSidebar from './Content/VueSidebar';
import './Vue.css'
import { Outlet } from 'react-router-dom';

function Vue() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><VueSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default Vue;