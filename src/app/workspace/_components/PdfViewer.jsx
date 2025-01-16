import React from 'react';

function PdfViewer({ fileUrl }) {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center p-4">
      <iframe
        src={fileUrl + "#toolbar=0"}
        width="150%"
        height="100%"
        className="h-full w-full border-2 border-gray-700 shadow-lg rounded-md custom-scrollbar"
      ></iframe>
    </div>
  );
}

export default PdfViewer;
