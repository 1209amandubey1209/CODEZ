import React,{useState} from "react";
import "../Vue.css";
import { VueContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(VueContentList) {
  return (<> 
        <h3>{VueContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={VueContentList.path}
    >
      <div className="side-item">{VueContentList.title}</div>
    </NavLink>
    </>

  );
}

function VueSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {VueContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {VueContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default VueSidebar;
