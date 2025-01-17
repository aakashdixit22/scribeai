// sidebar.jsx
import React from "react";
import Image from "next/image";
import { Layout, Shield, X } from "lucide-react";
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
  const fileList = useQuery(api.fileStorage.GetUseriles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  return (
    <div className="shadow-md h-[92vh] p-7 bg-gray-900 text-white relative flex flex-col border-r border-gray-700">
      {/* Close button - visible only on mobile */}
      <button 
        onClick={onClose}
        className="md:hidden absolute top-4 right-4 p-2 rounded-lg border hover:bg-gray-800 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="flex border justify-center mb-6 mt-8 md:mt-0">
        <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
      </div>

      {/* Rest of your sidebar content remains the same */}
      <div className="mt-5 space-y-3 flex-1">
        <UploadPdf />
        <nav className="space-y-2">
          <Link href="/dashboard">
            <div
              className={`flex gap-3 items-center p-3 rounded-lg cursor-pointer transition-colors font-medium ${
                path === "/dashboard" ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              <Layout className="text-white" />
              <span>Workspace</span>
            </div>
          </Link>
          <Link href="/dashboard/upgrade">
            <div
              className={`flex gap-3 items-center p-3 rounded-lg cursor-pointer transition-colors font-medium ${
                path === "/dashboard/upgrade" ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              <Shield className="text-white" />
              <span>Upgrade</span>
            </div>
          </Link>
        </nav>
      </div>

      <div className="mt-auto">
        <Progress value={(fileList?.length / 5) * 100} className="bg-gray-700" />
        <p className="text-xs text-gray-300 mt-2">
          {fileList?.length} out of 5 PDFs uploaded
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Upgrade to unlock more features
        </p>
      </div>
    </div>
  );
}

export default SideBar;