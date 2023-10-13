import React,{useState} from "react";
import "../Icons.css";
import { IconsContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(IconsContentList) {
  return (
     <>
       <h3>{IconsContentList.course}</h3>
      <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={IconsContentList.path}
    >
      <div className="side-item">{IconsContentList.title}</div>
    </NavLink>
     </>
  );
}

function IconsSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {IconsContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {IconsContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default IconsSidebar;
