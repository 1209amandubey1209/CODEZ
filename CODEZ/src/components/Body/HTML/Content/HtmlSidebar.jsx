import React from "react";
import "../HTML.css";
import { htmlContentList } from "../../../../Data/HTML/htmlContentList";
import { NavLink } from "react-router-dom";

function contentList(htmlContentList) {
  return (
    <>
    <h3>{htmlContentList.course}</h3>
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={htmlContentList.path}
    >
      <div className="side-item">{htmlContentList.title}</div>
    </NavLink>
    </>
  );
}

function HtmlSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {htmlContentList.map(contentList)}
      </div>
    </>
  );
}

export default HtmlSidebar;
