import React from 'react'
import HtmlSidebar from './Content/HtmlSidebar';
import './HTML.css'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function HTML() {
  return (
    <div className="container-fluid flex-column">
        <div className="row">
          <div className="col-2"><HtmlSidebar/></div>
          <div className="col ">
          <Outlet/>
          </div>
        </div>
        <div className="row">
          
          <div className="col offset-2"><Footer/></div>
        </div>
        
    </div>
    
    
  )
}

export default HTML
