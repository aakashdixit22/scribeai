import React from "react";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { Bell, Home, Smile } from "lucide-react";
import Link from "next/link";

function Header() {
  const { user } = useUser();

  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

  return (
    <div className="flex items-center justify-between p-5 bg-gray-900 text-white shadow-md border-b border-gray-700">
      {/* Left Section: Greeting Icon & Message */}
      <div className="flex items-center gap-4">
        <Smile className="text-gray-400" size={24} />
        <h2 className="text-lg font-semibold">
          Welcome, {user?.firstName ? toTitleCase(user.firstName) : "Guest"}!
        </h2>
      </div>

      {/* Right Section: Notifications, Home Icon & User Profile */}
      <div className="flex items-center gap-5">
        <button className="relative p-2 rounded-full hover:bg-gray-800 transition">
          <Bell className="text-gray-400" size={22} />
          {/* Notification Badge */}
          <span className="absolute top-1 right-1 bg-red-600 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        <Link href="/dashboard">
          <button className="p-2 rounded-full hover:bg-gray-800 transition">
            <Home className="text-gray-400" size={24} />
          </button>
        </Link>

        <SignOutButton signOutOptions={{redirectUrl: "/logout"}} >
          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
            <div className="relative rounded-lg bg-slate-900 px-4 py-2 transition-colors group-hover:bg-slate-800">
              <span className="relative z-10 font-medium text-sm text-white">
                Sign out
              </span>
            </div>
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}

export default Header;
