import React, { useState } from "react";
import Image from "next/image";
import { Layout, Shield, SidebarClose, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import UploadPdf from "./UploadPdf";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideBar({ onClose }) {
  const { user } = useUser();
  const path = usePathname();
  const [showAlert, setShowAlert] = useState(false);
  
  const fileList = useQuery(api.fileStorage.GetUseriles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  const isUploadLimited = fileList?.length >= 5;

  const handleWrapperClick = (e) => {
    if (isUploadLimited) {
      e.preventDefault();
      e.stopPropagation();
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <div className="shadow-xl h-screen bg-gray-900 text-white relative flex flex-col border-r border-gray-600">
      {/* Close button - visible only on mobile */}
      <button 
        onClick={onClose}
        className="md:hidden absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
      >
        {/* <X className="h-5 w-5" /> */}
        <SidebarClose className="h-6 w-6 text-gray-300" />
      </button>

      <div className="flex justify-center px-6 py-8 md:py-6">
        <div className="relative w-32 h-12">
          <Image 
            src="/logo.svg" 
            alt="logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Custom Alert */}
      {showAlert && (
        <div className="mx-4 p-4 rounded-xl bg-gray-800/80 border border-gray-700/50 text-sm backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out">
          <p className="font-medium">Upload Limit Reached</p>
          <p className="text-gray-300 text-xs mt-1">Please delete one or more existing files to continue uploading.</p>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 px-4 py-6 space-y-6">
        {/* Upload Section */}
        <div 
          onClick={handleWrapperClick}
          className={`transition-opacity duration-200 ${isUploadLimited ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          <div className={isUploadLimited ? 'pointer-events-none' : ''}>
            <UploadPdf />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-2">
          <Link href="/dashboard">
            <div
              className={`flex items-center mb-2 gap-3 px-4 py-4 rounded-xl transition-all duration-200 group ${
                path === "/dashboard" 
                  ? "bg-gray-700/90 shadow-md" 
                  : "hover:bg-gray-800/60"
              }`}
            >
              <Layout className={`w-5 h-5 transition-transform duration-200 ${
                path === "/dashboard" ? "scale-110" : "group-hover:scale-110"
              }`} />
              <span className="font-medium">Workspace</span>
            </div>
          </Link>
          <Link href="/dashboard/upgrade">
            <div
              className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-200 group ${
                path === "/dashboard/upgrade" 
                  ? "bg-gray-700/90 shadow-md" 
                  : "hover:bg-gray-800/60"
              }`}
            >
              <Shield className={`w-5 h-5 transition-transform duration-200 ${
                path === "/dashboard/upgrade" ? "scale-110" : "group-hover:scale-110"
              }`} />
              <span className="font-medium">Upgrade</span>
            </div>
          </Link>
        </nav>
      </div>

      {/* Footer Stats */}
      <div className="p-4 bg-gray-800/30 border-t border-gray-700/50 space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-md">
            <span className="text-gray-300">Storage Used</span>
            <span className="font-medium">{fileList?.length}/5</span>
          </div>
          <Progress 
            value={(fileList?.length / 5) * 100} 
            className="h-2 bg-gray-500"
          />
        </div>
        <p className="text-xs text-gray-400 font-medium">
          Upgrade to unlock unlimited storage
        </p>
      </div>
    </div>
  );
}

export default SideBar;