import React from "react";
import "../W3CSS.css";
import { W3CSSContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(W3CSSContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={W3CSSContentList.path}
    >
      <div className="side-item">{W3CSSContentList.title}</div>
    </NavLink>
  );
}

function W3CSSSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {W3CSSContentList.map(contentList)}
      </div>
    </>
  );
}

export default W3CSSSidebar;
