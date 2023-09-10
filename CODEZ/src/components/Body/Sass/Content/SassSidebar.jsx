import React from "react";
import "../Sass.css";
import { SassContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(SassContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={SassContentList.path}
    >
      <div className="side-item">{SassContentList.title}</div>
    </NavLink>
  );
}

function SassSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {SassContentList.map(contentList)}
      </div>
    </>
  );
}

export default SassSidebar;
