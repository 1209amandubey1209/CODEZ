import React from "react";
import "../Canvas.css";
import { CanvasContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(CanvasContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={CanvasContentList.path}
    >
      <div className="side-item">{CanvasContentList.title}</div>
    </NavLink>
  );
}

function CanvasSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {CanvasContentList.map(contentList)}
      </div>
    </>
  );
}

export default CanvasSidebar;
