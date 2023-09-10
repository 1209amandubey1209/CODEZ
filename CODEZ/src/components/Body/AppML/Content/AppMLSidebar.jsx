import React from "react";
import "../AppML.css";
import { AppMLContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(AppMLContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={AppMLContentList.path}
    >
      <div className="side-item">{AppMLContentList.title}</div>
    </NavLink>
  );
}

function AppMLSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {AppMLContentList.map(contentList)}
      </div>
    </>
  );
}

export default AppMLSidebar;
