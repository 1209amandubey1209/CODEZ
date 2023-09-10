import React from "react";
import "../Vue.css";
import { VueContentList } from "../../../../Data/Javascript/javascriptContentList";
import { NavLink } from "react-router-dom";

function contentList(VueContentList) {
  return (
    <NavLink
      style={{ color: "black", textDecoration: "none" }}
      to={VueContentList.path}
    >
      <div className="side-item">{VueContentList.title}</div>
    </NavLink>
  );
}

function VueSidebar() {
  return (
    <>
      <div className="position-fixed overflow-auto " style={{ height: "91%" }}>
        {VueContentList.map(contentList)}
      </div>
    </>
  );
}

export default VueSidebar;
