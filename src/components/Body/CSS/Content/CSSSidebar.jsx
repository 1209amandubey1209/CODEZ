import React,{useState} from "react";
import "../.././Style/style.css";
import { CSSContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


function contentList(CSSContentList) {
  return (<> 
        <h3>{CSSContentList.course}</h3>
        <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={CSSContentList.path}
    >
      <div className="side-item">{CSSContentList.title}</div>
    </NavLink>
    </>

  );
}

function CSSSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {CSSContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {CSSContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default CSSSidebar;
