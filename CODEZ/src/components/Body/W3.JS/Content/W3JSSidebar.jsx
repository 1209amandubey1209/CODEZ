import React from "react";
import "../W3JS.css";
import { W3JSContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(W3JSContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={W3JSContentList.path}
    >
      <div className="side-item">{W3JSContentList.title}</div>
    </NavLink>
  );
}

function W3JSSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {W3JSContentList.map(contentList)}
      </div>
    </>
  );
}

export default W3JSSidebar;
