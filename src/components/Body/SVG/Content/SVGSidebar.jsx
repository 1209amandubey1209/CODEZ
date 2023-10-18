import React,{useState} from "react";
import "../.././Style/style.css";
import { SVGContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
function contentList(SVGContentList) {
  return (
  <>    <h3>{SVGContentList.course}</h3>
        <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={SVGContentList.path}
    >
      <div className="side-item">{SVGContentList.title}</div>
    </NavLink>
  </>
  );
}

function SVGSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {SVGContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {SVGContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default SVGSidebar;
