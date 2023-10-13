import React, { useState } from "react";
import "../Go.css";
import { GoContentList } from "../../../../Data/Backend/backendContentList";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function contentList(GoContentList) {
  return (
    <>
      <h3>{GoContentList.course}</h3>
      <NavLink
        style={{ color: "black", textDecoration: "none" }}
        to={GoContentList.path}
      >
        <div className="side-item">{GoContentList.title}</div>
      </NavLink>
    </>
  );
}

function GoSidebar() {
  const [status, setStatus] = useState(false);
  return (
    <>
      <div
        className="position-fixed d-lg-block  d-none overflow-auto "
        style={{ height: "91%" }}
      >
        {GoContentList.map(contentList)}
      </div>
      <div
        className="d-bock d-lg-none position-fixed overflow-auto "
        onClick={() => setStatus(!status)}
      >
        <MenuIcon />
      </div>
      {status ? (
        <div
          className="col d-block d-lg-none position-fixed overflow-auto bg-white"
          style={{ height: "91%" }}
          onClick={() => setStatus(!status)}
        >
          {GoContentList.map(contentList)}
        </div>
      ) : null}
    </>
  );
}

export default GoSidebar;
