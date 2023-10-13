import React,{useState} from "react";
import "../Javascript.css";
import { JavaScriptContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(JavaScriptContentList) {
  return (
    <>
    <h3>{JavaScriptContentList.course}</h3>
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={JavaScriptContentList.path}
    >
      <div className="side-item">{JavaScriptContentList.title}</div>
    </NavLink>
    </>
  );
}

function JavascriptSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {JavaScriptContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {JavaScriptContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default JavascriptSidebar;
