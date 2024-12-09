"use client";
import WorkspaceHeader from '@/app/dashboard/_components/WorkspaceHeader';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PdfViewer from '@/app/dashboard/_components/PdfViewer';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import TextEditor from '@/app/dashboard/_components/TextEditor';

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
            <WorkspaceHeader fileName={fileInfo?.[0].fileName} />
            <div className="grid max-h-screen grid-cols-2 gap-5">
                {/* Text Editor Section */}
                <div className="h-screen overflow-y-scroll">
                    <TextEditor fileId={fileId} />
                </div>
                {/* PDF Viewer Section */}
                <div className="h-screen">
                    <PdfViewer fileUrl={fileInfo?.[0]?.fileUrl} />
                </div>
            </div>
        </div>
    );
}

export default Workspace;
