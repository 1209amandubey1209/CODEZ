import React ,{useState}from "react";
import "../.././Style/style.css";
import { GraphicsContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(GraphicsContentList) {
  return (
    <>  <h3>{GraphicsContentList.course}</h3>
           <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={GraphicsContentList.path}
    >
      <div className="side-item">{GraphicsContentList.title}</div>
    </NavLink>
    </>
  );
}

function GraphicsSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {GraphicsContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {GraphicsContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default GraphicsSidebar;
