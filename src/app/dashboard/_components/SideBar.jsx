"use client"
import React, { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Layout, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import UploadPdf from "./UploadPdf";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideBar() {
  const { user } = useUser();
  const path = usePathname();
  const fileList = useQuery(api.fileStorage.GetUseriles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });
  console.log((fileList?.length / 5) * 100);

  return (
    <div className="shadow-sm h-screen p-7">
      <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
      <div className="mt-10">
        <UploadPdf />
        <Link href="/dashboard">
        <div
          className={`flex gap-2 items-center p-3 mt-5 rounded-lg cursor-pointer ${
            path === "/dashboard" ? "bg-slate-300" : "hover:bg-slate-200"
          }`}
        >
          <Layout />
          <h2>Workspace</h2>
        </div>
        </Link>
        <Link href="/dashboard/upgrade">
        <div
          className={`flex gap-2 items-center p-3 mt-1 rounded-lg cursor-pointer ${
            path === "/dashboard/upgrade" ? "bg-slate-300" : "hover:bg-slate-200"
          }`}
        >
          <Shield />
          <h2>Upgrade</h2>
        </div>
        </Link>
      </div>
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={(fileList?.length / 5) * 100} />
        <p className="text-xs text-black mt-2">
          {fileList?.length} out of 5 PDF uploaded
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Upgrade to unlock more features
        </p>
      </div>
    </div>
  );
}

export default SideBar;