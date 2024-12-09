import React from 'react'

function PdfViewer({fileUrl}) {//in pdf viewer we accept as a fileurl
    console.log(fileUrl);
  return (
    <div>
      <iframe src={fileUrl+"#toolbar=0"} width="100%" height="100%" className='h-screen'></iframe>
    </div>
  );
}

export default PdfViewer;