import { UserButton, useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import Image from 'next/image';
import React from 'react';
import { api } from '../../../../convex/_generated/api';
import { useNotes } from '@/lib/context';

function WorkspaceHeader({ fileName, fileId }) {
  const { notes} = useNotes();
  const { user } = useUser();
  const saveNotes = useMutation(api.notes.AddNotes);
  const handleSave = async () => {
    await saveNotes({
      fileId: fileId,
      notes: notes,
      createdBy: user?.primaryEmailAddress?.emailAddress
    });
  };

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
      
      {/* Save Button and User Button */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={handleSave} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Save
        </button>
        <UserButton />
      </div>
    </div>
  );
}

export default WorkspaceHeader;