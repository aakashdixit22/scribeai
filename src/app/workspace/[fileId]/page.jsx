"use client";
import WorkspaceHeader from "@/app/workspace/_components/WorkspaceHeader";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PdfViewer from "@/app/workspace/_components/PdfViewer";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import TextEditor from "@/app/workspace/_components/TextEditor";
import { NotesProvider } from "@/lib/context";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function Workspace() {
  const params = useParams();
  const fileId = params.fileId;
  const fileInfo = useQuery(api.fileStorage.GetFileRecord, { fileId: fileId });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fileInfo) {
      setLoading(false);
    }
  }, [fileInfo]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Logo Container */}
        <div className="animate-bounce mb-8">
          <img
            src="/logo.png"
            alt="ScribeAI Logo"
            className="h-16  animate-pulse"
          />
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
            Loading your workspace
          </h2>

          {/* Loading Spinner */}
          <div className="relative">
            <div className="w-8 h-8 border-4 border-emerald-500/30 rounded-full animate-spin border-t-emerald-500"></div>
          </div>

          {/* Subtle text */}
          <p className="text-gray-400 text-sm animate-pulse">
            Preparing your notes...
          </p>
        </div>
      </div>
    );
  }

  const ResizeHandle = () => (
    <PanelResizeHandle className="hidden lg:flex w-2 mx-1">
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-1 h-16 bg-gray-600 rounded-full cursor-col-resize hover:bg-gray-500 transition-colors" />
      </div>
    </PanelResizeHandle>
  );

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <NotesProvider>
        {/* Workspace Header */}
        <div className="h-10 flex-none mb-8 sm:p-4">
          <WorkspaceHeader fileName={fileInfo?.[0]?.fileName} fileId={fileId} />
        </div>

        {/* Grid Layout with Resizable Panels */}
        <div className="flex-1 sm:p-4">
          <div className="block lg:hidden">
            <div className="flex-1 grid md:grid-cols-1 gap-1 sm:gap-3">
              {/* Text Editor Section */}
              <div className="h-[calc(100vh-7rem)] bg-gray-800 rounded-lg shadow-md border border-gray-700">
                <div className="h-full overflow-auto">
                  <TextEditor fileId={fileId} />
                </div>
              </div>

              {/* PDF Viewer Section */}
              <div className="h-[calc(100vh-7rem)] bg-gray-800 rounded-lg shadow-md border border-gray-700">
                <div className="h-full overflow-hidden">
                  <PdfViewer fileUrl={fileInfo?.[0]?.fileUrl} />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-[calc(100vh-7rem)]">
            <PanelGroup direction="horizontal">
              {/* Text Editor Panel */}
              <Panel defaultSize={50} minSize={20}>
                <div className="h-full bg-gray-800 rounded-lg shadow-md border border-gray-700">
                  <div className="h-full overflow-auto">
                    <TextEditor fileId={fileId} />
                  </div>
                </div>
              </Panel>

              <ResizeHandle />

              {/* PDF Viewer Panel */}
              <Panel defaultSize={50} minSize={20}>
                <div className="h-full bg-gray-800 rounded-lg shadow-md border border-gray-700">
                  <div className="h-full overflow-hidden">
                    <PdfViewer fileUrl={fileInfo?.[0]?.fileUrl} />
                  </div>
                </div>
              </Panel>
            </PanelGroup>
          </div>
        </div>
      </NotesProvider>
    </div>
  );
}

export default Workspace;
// "use client";
// import WorkspaceHeader from '@/app/workspace/_components/WorkspaceHeader';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import PdfViewer from '@/app/workspace/_components/PdfViewer';
// import { useQuery } from 'convex/react';
// import { api } from '../../../../convex/_generated/api';
// import TextEditor from '@/app/workspace/_components/TextEditor';
// import { NotesProvider } from '@/lib/context';

// function Workspace() {
//     const params = useParams();
//     const fileId = params.fileId;
//     const fileInfo = useQuery(api.fileStorage.GetFileRecord, { fileId: fileId });
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (fileInfo) {
//             setLoading(false);
//         }
//     }, [fileInfo]);

//     if (loading) {
//         return (
//             <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
//                 Loading...
//             </div>
//         );
//     }

//     return (
//         <div className="h-screen bg-gray-900 text-white flex flex-col">
//             <NotesProvider>
//                 {/* Workspace Header */}
//                 <div className="h-10  flex-none mb-8 sm:p-4">
//                     <WorkspaceHeader fileName={fileInfo?.[0]?.fileName} fileId={fileId} />
//                 </div>

//                 {/* Grid Layout for Editor & PDF Viewer */}
//                 <div className="flex-1 grid lg:grid-cols-2 md:grid-cols-1 gap-1 sm:gap-3 sm:p-4">
//                     {/* Text Editor Section */}
//                     <div className="h-[calc(100vh-7rem)] bg-gray-800 rounded-lg shadow-md border border-gray-700">
//                         <div className="h-full overflow-auto">
//                             <TextEditor fileId={fileId} />
//                         </div>
//                     </div>

//                     {/* PDF Viewer Section */}
//                     <div className="h-[calc(100vh-7rem)] bg-gray-800 rounded-lg shadow-md border border-gray-700">
//                         <div className="h-full overflow-hidden">
//                             <PdfViewer fileUrl={fileInfo?.[0]?.fileUrl} />
//                         </div>
//                     </div>
//                 </div>
//             </NotesProvider>
//         </div>
//     );
// }

// export default Workspace;

// "use client";
// import WorkspaceHeader from '@/app/workspace/_components/WorkspaceHeader';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import PdfViewer from '@/app/workspace/_components/PdfViewer';
// import { useQuery } from 'convex/react';
// import { api } from '../../../../convex/_generated/api';
// import TextEditor from '@/app/workspace/_components/TextEditor';
// import { NotesProvider } from '@/lib/context';

// function Workspace() {
//     const params = useParams();
//     const fileId = params.fileId;
//     const fileInfo = useQuery(api.fileStorage.GetFileRecord, { fileId: fileId });

//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (fileInfo) {
//             setLoading(false);
//         }
//     }, [fileInfo]);

//     if (loading) {
//         return (
//             <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
//                 Loading...
//             </div>
//         );
//     }

//     return (
//         <div className="bg-gray-900 text-white h-screen p-4">
//             <NotesProvider>
//                 {/* Workspace Header */}
//                 <WorkspaceHeader fileName={fileInfo?.[0]?.fileName} fileId={fileId} />

//                 {/* Grid Layout for Editor & PDF Viewer */}
//                 <div className="grid max-h-screen grid-cols-2 gap-5 mt-4">
//                     {/* Text Editor Section */}
//                     <div className="h-screen bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
//                         <TextEditor fileId={fileId} />
//                     </div>

//                     {/* PDF Viewer Section */}
//                     <div className="h-screen bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
//                         <PdfViewer fileUrl={fileInfo?.[0]?.fileUrl} />
//                     </div>
//                 </div>
//             </NotesProvider>
//         </div>
//     );
// }

// export default Workspace;
