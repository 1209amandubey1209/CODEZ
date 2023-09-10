import React from "react";
import "../Graphics.css";
import { GraphicsContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(GraphicsContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={GraphicsContentList.path}
    >
      <div className="side-item">{GraphicsContentList.title}</div>
    </NavLink>
  );
}

function GraphicsSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {GraphicsContentList.map(contentList)}
      </div>
    </>
  );
}

export default GraphicsSidebar;
