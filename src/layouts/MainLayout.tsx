import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
