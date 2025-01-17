"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";

function Page() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Only query files once we have the user email
  const fileList = useQuery(
    api.fileStorage.GetUseriles,
    isUserLoaded && user?.primaryEmailAddress?.emailAddress
      ? {
          userEmail: user.primaryEmailAddress.emailAddress,
        }
      : "skip" // Skip the query if we don't have the email yet
  );

  const deleteFile = useMutation(api.fileStorage.DeleteFile);

  // Effect to handle loading states
  useEffect(() => {
    if (!isUserLoaded) {
      setIsLoading(true);
      return;
    }

    if (!user?.primaryEmailAddress?.emailAddress) {
      setIsLoading(false); // No user email, show empty state
      return;
    }

    if (fileList === undefined) {
      setIsLoading(true); // Still loading files
      return;
    }

    setIsLoading(false); // Files loaded
  }, [isUserLoaded, user, fileList]);

  const handleDelete = async (fileId) => {
    try {
      const response = await deleteFile({ fileId });
      if (response.success) {
        alert("File deleted successfully!");
      } else {
        alert("Failed to delete file: " + response.error);
      }
    } catch (error) {
      alert("Error deleting file: " + error.message);
    }
  };

  // Skeleton loader component
  const SkeletonLoader = () => (
    <>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="flex p-5 shadow-md flex-col rounded-md items-center justify-center border-2 border-gray-700 bg-gray-800">
            <div className="w-[70px] h-[70px] bg-gray-700 rounded" />
            <div className="mt-3 w-24 h-4 bg-gray-700 rounded" />
          </div>
        </div>
      ))}
    </>
  );

  // Show loading skeleton while either user or files are loading
  if (isLoading) {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-2">
        <h1 className="font-bold text-3xl">Workspace</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
          <SkeletonLoader />
        </div>
      </div>
    );
  }

  const filteredFiles = fileList?.filter(file => 
    file.fileName.toLowerCase().includes(searchTerm.toLowerCase())
  ) ?? [];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-2">
      <h1 className="font-bold text-3xl">Workspace</h1>
      <input
        type="text"
        placeholder="Search files..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mt-4 p-2 rounded bg-gray-800 text-white border border-gray-700"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
        {filteredFiles.map((file, index) => (
          <div key={index} className="relative">
            <Link href={`/workspace/${file.fileId}`}>
              <div className="flex p-5 shadow-md flex-col rounded-md items-center justify-center border-2 border-gray-700 cursor-pointer hover:scale-105 transition-all bg-gray-800">
                <img src="pdf.png" alt="pdf" width={70} height={70} />
                <h2 className="mt-3 font-medium text-lg text-gray-300">{file.fileName}</h2>
              </div>
            </Link>
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded hover:bg-red-700 transition"
              onClick={() => handleDelete(file.fileId)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;