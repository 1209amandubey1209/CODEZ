import React from 'react'
import SassSidebar from './Content/SassSidebar';
import './Sass.css'
import { Outlet } from 'react-router-dom';

function Sass() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><SassSidebar/></div>
          <div className="col">
            
          </div>
        </div>
        <Outlet/>
    </div>
    
    
  )
}

export default Sass