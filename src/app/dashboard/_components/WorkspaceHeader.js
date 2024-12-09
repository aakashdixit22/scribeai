import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

function WorkspaceHeader({ fileName }) {
  return (
    <div className="p-4 flex justify-between items-center shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={140} height={100} />
      </div>
      
      {/* File Name */}
      <div className="flex-1 text-center">
        <div className="inline-block px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 shadow-sm">
          <h1 className="text-lg font-semibold text-gray-700">{fileName || "Untitled Document"}</h1>
        </div>
      </div>
      
      {/* User Button */}
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default WorkspaceHeader;
