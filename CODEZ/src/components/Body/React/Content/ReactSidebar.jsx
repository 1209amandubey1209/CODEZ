import React from "react";
import "../React.css";
import { ReactContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(ReactContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={ReactContentList.path}
    >
      <div className="side-item">{ReactContentList.title}</div>
    </NavLink>
  );
}

function ReactSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {ReactContentList.map(contentList)}
      </div>
    </>
  );
}

export default ReactSidebar;
