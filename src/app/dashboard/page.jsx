"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import { Search, File, Trash2, X } from "lucide-react";
import UploadPdf from "./_components/UploadPdf";

const Page = () => {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    show: false,
    fileId: null,
  });

  const fileList = useQuery(
    api.fileStorage.GetUseriles,
    isUserLoaded && user?.primaryEmailAddress?.emailAddress
      ? {
          userEmail: user.primaryEmailAddress.emailAddress,
        }
      : "skip"
  );

  const deleteFile = useMutation(api.fileStorage.DeleteFile);

  useEffect(() => {
    setIsLoading(
      !isUserLoaded ||
        !user?.primaryEmailAddress?.emailAddress ||
        fileList === undefined
    );
  }, [isUserLoaded, user, fileList]);

  const handleDeleteClick = (fileId) => {
    setDeleteConfirmation({ show: true, fileId });
  };

  const handleDelete = async () => {
    try {
      const response = await deleteFile({ fileId: deleteConfirmation.fileId });
      if (response.success) {
        setDeleteConfirmation({ show: false, fileId: null });
      } else {
        alert("Failed to delete file: " + response.error);
      }
    } catch (error) {
      alert("Error deleting file: " + error.message);
    }
  };

  const SkeletonLoader = () => (
    <>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="flex flex-col items-center h-48 p-6 rounded-2xl bg-gray-800 border border-gray-700">
            <div className="flex items-center justify-center w-full mb-4">
              <div className="w-16 h-16 bg-gray-700 rounded-lg" />
            </div>
            <div className="h-6 bg-gray-700 rounded-lg w-3/4 mb-2" />
            <div className="h-4 bg-gray-700 rounded-lg w-1/2 mb-2" />
            <div className="mt-auto">
              <div className="h-6 w-12 bg-gray-700 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </>
  );

  const filteredFiles =
    fileList?.filter((file) =>
      file.fileName.toLowerCase().includes(searchTerm.toLowerCase())
    ) ?? [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 p-3">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Workspace</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <SkeletonLoader />
          </div>
        </div>
      </div>
    );
  }

   return (
    <div className="min-h-screen bg-gray-900 p-3 sm:p-4 md:p-2">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-10">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Workspace</h1>
            <p className="text-sm sm:text-base text-gray-400">Manage and organize your AI-PDF notes files</p>
          </div>
          
          {/* Search and Upload Section */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              />
            </div>
            <div className="sm:w-48">
              <UploadPdf />
            </div>
          </div>
        </div>
  
        {/* Grid Layout */}
        {filteredFiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-20 px-4 border-2 border-dashed border-gray-700 rounded-xl sm:rounded-2xl bg-gray-800/30">
            <File className="h-16 w-16 sm:h-20 sm:w-20 text-gray-500 mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-medium text-gray-300 mb-2 sm:mb-3">
              No files found
            </h3>
            <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8 max-w-md">
              {searchTerm
                ? "No files match your search criteria"
                : "Your workspace is empty. Start by uploading your first PDF"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {/* File Cards */}
            {filteredFiles.map((file, index) => (
              <div key={index} className="group relative">
                <Link href={`/workspace/${file.fileId}`}>
                  <div className="flex flex-col items-center h-40 sm:h-48 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-600 hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <div className="flex items-center justify-between w-full mb-3 sm:mb-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 relative mx-auto">
                        <img src="/note.png" alt="Note" className="w-full h-full object-contain" />
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteClick(file.fileId);
                        }}
                        className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 p-1.5 sm:p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                      >
                        <Trash2 className="h-5 w-5 sm:h-6 sm:w-6" />
                      </button>
                    </div>
                    <h2 className="font-medium text-base sm:text-lg text-gray-200 line-clamp-2 mb-2 text-center">
                      {file.fileName}
                    </h2>
                    <div className="mt-auto">
                      <span className="text-xs px-2.5 py-1 bg-gray-700 rounded-full text-gray-300">
                        PDF
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
  
        {/* Modal with improved mobile responsiveness */}
        {deleteConfirmation.show && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Delete File
                </h3>
                <button
                  onClick={() =>
                    setDeleteConfirmation({ show: false, fileId: null })
                  }
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete this file? This action cannot be
                undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() =>
                    setDeleteConfirmation({ show: false, fileId: null })
                  }
                  className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
