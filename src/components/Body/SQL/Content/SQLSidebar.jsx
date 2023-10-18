import React,{useState} from "react";
import "../.././Style/style.css";
import { SQLContentList } from "../../../../Data/Backend/backendContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(SQLContentList) {
  return (
    <>
     <h3>{SQLContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={SQLContentList.path}
    >
      <div className="side-item">{SQLContentList.title}</div>
    </NavLink>
    </>
  );
}

function SQLSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {SQLContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {SQLContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default SQLSidebar;
