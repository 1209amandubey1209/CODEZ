import React, { useState } from "react";
import "../.././Style/style.css";
import { JQueryContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(JQueryContentList) {
  return (
    <>
    <h4>{JQueryContentList.course}</h4>
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={JQueryContentList.path}
    >
      <div className="side-item">{JQueryContentList.title}</div>
    </NavLink>
    </>
  );
}

function JQuerySidebar() {
  const [status,setStatus]=useState(false);
  return (
    <>
      <div className="col-2 d-lg-block  d-none position-fixed overflow-auto " style={{ height: "91%" }}>
        {JQueryContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {JQueryContentList.map(contentList)}
    </div>
      :null
       }

    </>
  );
}

export default JQuerySidebar;


