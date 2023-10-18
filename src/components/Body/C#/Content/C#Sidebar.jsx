import React, { useState } from "react";
import "../.././Style/style.css";
import { CsharpContentList } from "../../../../Data/Backend/backendContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(CsharpContentList) {
  return (
    <>
     <h3>{CsharpContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={CsharpContentList.path}
    >
      <div className="side-item">{CsharpContentList.title}</div>
    </NavLink>
    </>
  );
}

function CsharpSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {CsharpContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {CsharpContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default CsharpSidebar;
