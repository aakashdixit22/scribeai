
import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function PdfViewer({ fileUrl }) {
    const defaultLayout = defaultLayoutPlugin();

    return (
        <div className="bg-gray-900 h-screen flex justify-center items-center">
            <div className="h-full w-full  shadow-lg rounded-lg custom-scrollbar">
                
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={fileUrl} plugins={[defaultLayout]} theme={{
                      theme: 'dark'
                    }} />
                </Worker>
            </div>
        </div>
    );
}

export default PdfViewer;
