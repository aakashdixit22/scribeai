"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";

function Page() {
  const { user } = useUser();
  const fileList = useQuery(api.fileStorage.GetUseriles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  const deleteFile = useMutation(api.fileStorage.DeleteFile);

  const handleDelete = async (fileId) => {
    const response = await deleteFile({ fileId });
    if (response.success) {
      alert("File deleted successfully!");
    } else {
      alert("Failed to delete file: " + response.error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-5">
      <h1 className="font-bold text-3xl">Workspace</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
        {fileList &&
          fileList.map((file, index) => (
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
