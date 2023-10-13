import React,{useState} from "react";
import "../Python.css";
import { PythonContentList } from "../../../../Data/Backend/backendContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function contentList(PythonContentList) {
  return (
    <>
     <h3>{PythonContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={PythonContentList.path}
    >
      <div className="side-item">{PythonContentList.title}</div>
    </NavLink>
    </>
  );
}

function PythonSidebar() {
  const [status,setStatus]=useState(false)
  return (
    <>
      <div className="position-fixed d-lg-block  d-none overflow-auto " style={{ height: "91%" }}>
        {PythonContentList.map(contentList)}
      </div>
      <div className='d-bock d-lg-none position-fixed overflow-auto '  onClick={()=>setStatus(!status)}><MenuIcon/></div>
      {status?
      <div className="col d-block d-lg-none position-fixed overflow-auto bg-white" style={{ height: "91%" }} onClick={()=>setStatus(!status)}>
      {PythonContentList.map(contentList)}
    </div>
      :null
       }
    </>
  );
}

export default PythonSidebar;
