import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
