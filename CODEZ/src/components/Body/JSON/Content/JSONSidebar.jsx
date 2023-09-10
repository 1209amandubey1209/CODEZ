import React from "react";
import "../JSON.css";
import { JSONContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(JSONContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={JSONContentList.path}
    >
      <div className="side-item">{JSONContentList.title}</div>
    </NavLink>
  );
}

function JSONSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {JSONContentList.map(contentList)}
      </div>
    </>
  );
}

export default JSONSidebar;
