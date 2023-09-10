import React from "react";
import "../SVG.css";
import { SVGContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(SVGContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={SVGContentList.path}
    >
      <div className="side-item">{SVGContentList.title}</div>
    </NavLink>
  );
}

function SVGSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {SVGContentList.map(contentList)}
      </div>
    </>
  );
}

export default SVGSidebar;
