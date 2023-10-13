
import React,{useState} from "react";
import "../R.css";
import { RContentList } from "../../../../Data/Backend/backendContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(RContentList) {
  return (
    <>
     <h3>{RContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={RContentList.path}
    >
      <div className="side-item">{RContentList.title}</div>
    </NavLink>
    </>
  );
}

function RSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {RContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {RContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default RSidebar;
