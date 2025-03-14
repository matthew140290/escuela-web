import React from "react";
import { Outlet } from "react-router";

function MainContent() {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <Outlet />
    </div>
  );
}

export default MainContent;
