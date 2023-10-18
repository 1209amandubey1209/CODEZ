import React,{useState} from "react";
import "../.././Style/style.css";
import { W3CSSContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


function contentList(W3CSSContentList) {
  return (<> 
        <h4>{W3CSSContentList.course}</h4>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={W3CSSContentList.path}
    >
      <div className="side-item">{W3CSSContentList.title}</div>
    </NavLink>
    </>

  );
}

function W3CSSSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {W3CSSContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {W3CSSContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default W3CSSSidebar;
