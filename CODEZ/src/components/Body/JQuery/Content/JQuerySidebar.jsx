import React from "react";
import "../JQuery.css";
import { JQueryContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(JQueryContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={JQueryContentList.path}
    >
      <div className="side-item">{JQueryContentList.title}</div>
    </NavLink>
  );
}

function JQuerySidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {JQueryContentList.map(contentList)}
      </div>
    </>
  );
}

export default JQuerySidebar;
