// layout.jsx
"use client";
import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

function DashBoardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 transform 
        md:translate-x-0 md:static md:w-64
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        z-40
      `}>
        <SideBar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} isSidebarOpen={sidebarOpen} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default DashBoardLayout;