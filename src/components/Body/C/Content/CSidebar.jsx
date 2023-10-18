import React, { useState } from "react";
import "../.././Style/style.css";
import { CContentList } from "../../../../Data/Backend/backendContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'
function contentList(CContentList) {
  return (
    <>
     <h3>{CContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={CContentList.path}
    >
      <div className="side-item">{CContentList.title}</div>
    </NavLink>
    </>
  );
}

function CSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {CContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {CContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default CSidebar;
