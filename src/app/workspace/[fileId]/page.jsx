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
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NotesProvider>
            <WorkspaceHeader fileName={fileInfo?.[0].fileName} fileId={fileId}/>
            <div className="grid max-h-screen grid-cols-2 gap-5">
                {/* Text Editor Section */}
                <div className="h-screen ">
                    <TextEditor fileId={fileId} />
                </div>
                {/* PDF Viewer Section */}
                <div className="h-screen">
                    <PdfViewer fileUrl={fileInfo?.[0]?.fileUrl} />
                </div>
            </div>
            </NotesProvider>
        </div>
    );
}

export default Workspace;
