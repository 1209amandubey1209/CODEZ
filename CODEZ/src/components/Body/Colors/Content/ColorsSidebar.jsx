import React from "react";
import "../Colors.css";
import { ColorsContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(ColorsContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={ColorsContentList.path}
    >
      <div className="side-item">{ColorsContentList.title}</div>
    </NavLink>
  );
}

function ColorsSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {ColorsContentList.map(contentList)}
      </div>
    </>
  );
}

export default ColorsSidebar;
