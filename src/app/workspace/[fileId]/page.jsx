"use client";
import WorkspaceHeader from '@/app/workspace/_components/WorkspaceHeader';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PdfViewer from '@/app/workspace/_components/PdfViewer';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import TextEditor from '@/app/workspace/_components/TextEditor';
import { NotesProvider } from '@/lib/context';

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
            <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
                Loading...
            </div>
        );
    }

    return (
        <div className="h-screen bg-gray-900 text-white flex flex-col">
            <NotesProvider>
                {/* Workspace Header */}
                <div className="h-10  flex-none mb-8 sm:p-4">
                    <WorkspaceHeader fileName={fileInfo?.[0]?.fileName} fileId={fileId} />
                </div>

                {/* Grid Layout for Editor & PDF Viewer */}
                <div className="flex-1 grid lg:grid-cols-2 md:grid-cols-1 gap-1 sm:gap-3 sm:p-4">
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
