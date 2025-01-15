"use client";
import React from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

function DashBoardlayout({ children }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      <div className="md:w-64 h-screen fixed bg-gray-800">
        <SideBar />
      </div>
      <div className="ml-64 flex-1">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashBoardlayout;
