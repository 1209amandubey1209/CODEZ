import React from "react";
import "../Javascript.css";
import { JavaScriptContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(JavaScriptContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={JavaScriptContentList.path}
    >
      <div className="side-item">{JavaScriptContentList.title}</div>
    </NavLink>
  );
}

function JavascriptSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {JavaScriptContentList.map(contentList)}
      </div>
    </>
  );
}

export default JavascriptSidebar;
