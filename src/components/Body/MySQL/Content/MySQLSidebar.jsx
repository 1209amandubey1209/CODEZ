import React,{useState} from "react";
import "../.././Style/style.css";
import { MySQLContentList } from "../../../../Data/Backend/backendContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(MySQLContentList) {
  return (
    <>
     <h3>{MySQLContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={MySQLContentList.path}
    >
      <div className="side-item">{MySQLContentList.title}</div>
    </NavLink>
    </>
  );
}

function MySQLSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {MySQLContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {MySQLContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default MySQLSidebar;
