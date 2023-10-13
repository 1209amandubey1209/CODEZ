import React,{useState} from "react";
import "../HTML.css";
import { htmlContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(htmlContentList) {
  return (
    <>
    <h3>{htmlContentList.course}</h3>
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={htmlContentList.path}
    >
      <div className="side-item">{htmlContentList.title}</div>
    </NavLink>
    </>
  );
}

function HtmlSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {htmlContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {htmlContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default HtmlSidebar;
