import React, { useState } from 'react'
import HtmlSidebar from './Content/HtmlSidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function HTML() {
  const[status,setStatus]=useState(false)
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col "><HtmlSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default HTML