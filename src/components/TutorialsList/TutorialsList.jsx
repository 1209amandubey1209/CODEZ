import React from "react";
import "./TutorialsList.css";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  HtmlAndCss,
  JavaScript,
  Backend,
  DA,
} from "../../Data/TutorialsList/TutorialsListContent";


function tutorialsdata(HtmlAndCss) {
  return (
    <>
      <Link to= {HtmlAndCss.link} style={{textDecoration:"none"}}><div className="tutorials-data">{HtmlAndCss.title}</div></Link>
       
    </>
  );
}


function TutorialsList() {
    const [status,setStatus]=React.useState(true);
    
  return (
    <>
       {status ?

       
      <div id="tutorialslist" className="container-fluid text-white position-fixed overflow-auto " style={{height:"91%",width:"vw-100"}}>
        <div className="row m-auto">
        <div className="row mb-5 justify-content-end ">
            <div className="col-1 " ><Link to='/'><CloseOutlinedIcon className='close-btn' /></Link></div>
        </div>
          <h1 className="top-heading">CODEZ'S Tutorials</h1>
          <div className=" col-12 col-lg-3 col-md-4 col-sm-6">
            <h5>HTML AND CSS</h5>
            <div onClick={()=>setStatus(!status)}>{HtmlAndCss.map(tutorialsdata)}</div>
          </div>
          <div className=" col-12 col-lg-3 col-md-4 col-sm-6">
            <h5>JAVASCRIPT</h5>
            <div>{JavaScript.map(tutorialsdata)}</div>
          </div>
          <div className=" col-12 col-lg-3 col-md-4 col-sm-6">
            <h5>BACKEND</h5>
            <div>{Backend.map(tutorialsdata)}</div>
          </div>
          <div className=" col-12 col-lg-3 col-md-4 col-sm-6">
            <h5>DATA ANALYTICS</h5>
            <div>{DA.map(tutorialsdata)}</div>
          </div>
        </div>
      </div>
      :null}

    </>
  );
}
export default TutorialsList;
