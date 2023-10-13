import React,{useState} from "react";
import "../JSON.css";
import { JSONContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(JSONContentList) {
  return (
    <>
      <h3>{JSONContentList.course}</h3>
      <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={JSONContentList.path}
    >
      <div className="side-item">{JSONContentList.title}</div>
    </NavLink>
    </>
  );
}

function JSONSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {JSONContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {JSONContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default JSONSidebar;
