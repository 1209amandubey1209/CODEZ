import React,{useState} from "react";
import "../W3JS.css";
import { W3JSContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(W3JSContentList) {
  return (
    <>
     <h3>{W3JSContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={W3JSContentList.path}
    >
      <div className="side-item">{W3JSContentList.title}</div>
    </NavLink>
    </>
  );
}

function W3JSSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {W3JSContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {W3JSContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default W3JSSidebar;
