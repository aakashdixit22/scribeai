import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Bell, Search, Home } from "lucide-react";
import Link from "next/link";

function Header() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-5 bg-gray-900 text-white shadow-md border-b border-gray-700">
      {/* Left Section: Home Icon & Greeting */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <button className="p-2 rounded-full hover:bg-gray-800 transition">
            <Home className="text-gray-400" size={24} />
          </button>
        </Link>
        <h2 className="text-lg font-semibold">
          Welcome, {user?.firstName || "Guest"}!
        </h2>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-md px-3 py-2 w-72">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white ml-2 w-full"
        />
      </div>

      {/* Right Section: Notifications & User Profile */}
      <div className="flex items-center gap-5">
        <button className="relative p-2 rounded-full hover:bg-gray-800 transition">
          <Bell className="text-gray-400" size={22} />
          {/* Notification Badge */}
          <span className="absolute top-1 right-1 bg-red-600 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        <UserButton />
      </div>
    </div>
  );
}

export default Header;
