import React from "react";
import "../Bootstrap.css";
import { BS5ContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(BS5ContentList) {
  return (
    <>
     <h3>{BS5ContentList.course}</h3>
     <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={BS5ContentList.path}
    >
      <div className="side-item">{BS5ContentList.title}</div>
    </NavLink>
    </>
  );
}

function BootstrapSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {BS5ContentList.map(contentList)}
      </div>
    </>
  );
}

export default BootstrapSidebar;
