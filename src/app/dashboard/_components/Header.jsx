import React from "react";
import { useUser } from "@clerk/nextjs";
import { Home, Smile, Menu, SidebarOpen } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

function Header({ onMenuClick }) {
  const { user } = useUser();

  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

  return (
    <div className="sticky top-0  bg-gray-900 border-b  border-gray-600">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        {/* Left Section: Menu Button & Greeting */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            {/* <Menu className="h-5 w-5 text-gray-300" /> */}
            <SidebarOpen className="h-6 w-6 text-gray-300" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8">
              {/* <Smile className="text-gray-300 h-7 w-7" /> */}
              <p className="text-2xl text-gray-300">👋</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-medium text-gray-400">Welcome back,</h2>
              <p className="text-lg font-semibold text-white">
                {user?.firstName ? toTitleCase(user.firstName) : "Guest"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Navigation & Actions */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="p-2 rounded-lg text-gray-300 hover:bg-gray-700/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-700">
              <Home className="h-6 w-6" />
            </button>
          </Link>

          
          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]"
          onClick={()=>redirect('/logout')}
          >
            <div className="relative rounded-lg bg-slate-900 px-4 py-2 transition-colors group-hover:bg-slate-800">
              <span className="relative z-10 font-medium text-sm text-white">
                Sign out
              </span>
            </div>
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default Header;