import React from "react";
import "../AJAX.css";
import { AJAXContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(AJAXContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={AJAXContentList.path}
    >
      <div className="side-item">{AJAXContentList.title}</div>
    </NavLink>
  );
}

function AJAXSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {AJAXContentList.map(contentList)}
      </div>
    </>
  );
}

export default AJAXSidebar;
