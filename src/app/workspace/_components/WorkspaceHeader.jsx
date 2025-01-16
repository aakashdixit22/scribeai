import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import { useNotes } from "@/lib/context";
import { SignOutButton } from "@clerk/nextjs";

function WorkspaceHeader({ fileName, fileId }) {
  const { notes } = useNotes();
  const { user } = useUser();
  const saveNotes = useMutation(api.notes.AddNotes);

  const handleSave = async () => {
    await saveNotes({
      fileId: fileId,
      notes: notes,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
  };

  return (
    <div className="h-16 px-4 flex items-center justify-between bg-gray-900 text-white border-b border-gray-700">
      {/* Logo */}
      <div className="w-[120px] hidden sm:flex items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={80}
          className="h-8 w-auto"
        />
      </div>

      {/* File Name - Fixed width, centered */}
      <div className="flex-1 max-w-md mx-4">
        <div className="px-3 py-1.5 border border-gray-600 rounded-lg bg-gray-800 shadow-sm">
          <h1 className="text-md text-center font-semibold text-gray-300 truncate">
            {fileName || "Untitled Document"}
          </h1>
        </div>
      </div>

      {/* Actions Group - Right aligned */}
      <div className="flex items-center space-x-3">
        <button
          onClick={handleSave}
          className="group rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]"
        >
          <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800">
            <span className="text-sm text-white">Save</span>
          </div>
        </button>

        <div className="hidden sm:block">
          <SignOutButton signOutOptions={{ redirectUrl: "/logout" }}>
            <button className="group rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
              <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800">
                <span className="text-sm text-white">Sign out</span>
              </div>
            </button>
          </SignOutButton>
        </div>

        <UserButton afterSignOutUrl="/logout" />
      </div>
    </div>
  );
}

export default WorkspaceHeader;

// import { UserButton, useUser } from '@clerk/nextjs';
// import { useMutation } from 'convex/react';
// import Image from 'next/image';
// import React from 'react';
// import { api } from '../../../../convex/_generated/api';
// import { useNotes } from '@/lib/context';
// import { SignOutButton } from '@clerk/nextjs';

// function WorkspaceHeader({ fileName, fileId }) {
//   const { notes } = useNotes();
//   const { user } = useUser();
//   const saveNotes = useMutation(api.notes.AddNotes);

//   const handleSave = async () => {
//     await saveNotes({
//       fileId: fileId,
//       notes: notes,
//       createdBy: user?.primaryEmailAddress?.emailAddress,
//     });
//   };

//   return (
//     <div className="p-2 pb-3 flex justify-between items-center shadow-md bg-gray-900 text-white border-b border-gray-700">
//       {/* Logo */}
//       <div className="flex items-center">
//         <Image src="/logo.svg" alt="logo" width={140} height={100} />
//       </div>

//       {/* File Name */}
//       <div className="flex-1 text-center">
//         <div className="inline-block px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 shadow-sm">
//           <h1 className="text-lg font-semibold text-gray-300">
//             {fileName || 'Untitled Document'}
//           </h1>
//         </div>
//       </div>

//       {/* Save Button and User Button */}
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={handleSave}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none transition"
//         >
//           Save
//         </button>

//         <SignOutButton signOutOptions={{redirectUrl: "/logout"}} >
//           <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
//             <div className="relative rounded-lg bg-slate-900 px-4 py-2 transition-colors group-hover:bg-slate-800">
//               <span className="relative z-10 font-medium text-sm text-white">
//                 Sign out
//               </span>
//             </div>
//           </button>
//         </SignOutButton>

//         <UserButton />
//       </div>
//     </div>
//   );
// }

// export default WorkspaceHeader;
