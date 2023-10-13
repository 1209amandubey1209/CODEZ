import React,{useState} from "react";
import "../PHP.css";
import { PHPContentList } from "../../../../Data/Backend/backendContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(PHPContentList) {
  return (
    <>
     <h3>{PHPContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={PHPContentList.path}
    >
      <div className="side-item">{PHPContentList.title}</div>
    </NavLink>
    </>
  );
}

function PHPSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {PHPContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {PHPContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default PHPSidebar;
