import React,{useState} from "react";
import "../.././Style/style.css";
import { ReactContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(ReactContentList) {
  return (
    <>
    <h4>{ReactContentList.course}</h4>
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={ReactContentList.path}
    >
      <div className="side-item">{ReactContentList.title}</div>
    </NavLink>
    </>
  );
}

function ReactSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {ReactContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {ReactContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default ReactSidebar;
