import React from "react";
import CplusplusSidebar from "./Content/C++Sidebar";
import ".././Style/style.css";
import { Outlet } from "react-router-dom";

function Cplusplus() {
  return (
    <div className="container-fluid flex-column">
      <div className="row">
        <div className="col">
          <CplusplusSidebar />
        </div>
        <div className="col"></div>
      </div>
      <Outlet />
    </div>
  );
}

export default Cplusplus;
