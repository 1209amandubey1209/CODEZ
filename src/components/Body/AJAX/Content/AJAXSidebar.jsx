import React, { useState } from "react";
import "../.././Style/style.css";
import { AJAXContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(AJAXContentList) {
  return (
    <>
    <h3>{AJAXContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={AJAXContentList.path}
    >
      <div className="side-item">{AJAXContentList.title}</div>
    </NavLink>
    </>
  );
}

function AJAXSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {AJAXContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div id="sidebar-item" className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {AJAXContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default AJAXSidebar;
