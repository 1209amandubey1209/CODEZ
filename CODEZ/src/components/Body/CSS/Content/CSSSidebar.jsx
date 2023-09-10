import React from "react";
import "../CSS.css";
import { CSSContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

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
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {CSSContentList.map(contentList)}
      </div>
    </>
  );
}

export default CSSSidebar;
