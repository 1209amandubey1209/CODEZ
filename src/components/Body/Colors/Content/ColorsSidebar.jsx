import React,{useState} from "react";
import "../Colors.css";
import { ColorsContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(ColorsContentList) {
  return (
   <>  <h3>{ColorsContentList.course}</h3>
       <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={ColorsContentList.path}
    >
      <div className="side-item">{ColorsContentList.title}</div>
    </NavLink>
   </>
  );
}

function ColorsSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {ColorsContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {ColorsContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default ColorsSidebar;
