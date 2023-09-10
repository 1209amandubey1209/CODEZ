import React from "react";
import "../Icons.css";
import { IconsContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(IconsContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={IconsContentList.path}
    >
      <div className="side-item">{IconsContentList.title}</div>
    </NavLink>
  );
}

function IconsSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {IconsContentList.map(contentList)}
      </div>
    </>
  );
}

export default IconsSidebar;
