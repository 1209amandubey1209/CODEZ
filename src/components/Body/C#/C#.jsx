import React from 'react'
import CsharpSidebar from './Content/C#Sidebar';
import '.././Style/style.css'
import { Outlet } from 'react-router-dom';


function Csharp() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col"><CsharpSidebar/></div>
          <div className="col">
          
          
          </div>
          
        </div>
        <Outlet/>
        
    </div>
    
    
  )
}

export default Csharp