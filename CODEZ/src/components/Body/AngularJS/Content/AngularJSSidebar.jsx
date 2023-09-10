import React from "react";
import "../AngularJS.css";
import { AngularJSContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(AngularJSContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={AngularJSContentList.path}
    >
      <div className="side-item">{AngularJSContentList.title}</div>
    </NavLink>
  );
}

function AngularJSSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {AngularJSContentList.map(contentList)}
      </div>
    </>
  );
}

export default AngularJSSidebar;
