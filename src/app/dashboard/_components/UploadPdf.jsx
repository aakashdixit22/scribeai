// "use client";
// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/Input";
// import { Button } from "@/components/ui/button";
// import { useAction, useMutation } from "convex/react";
// import { Loader2Icon } from "lucide-react";
// import { api } from "../../../../convex/_generated/api";
// import uuid4 from "uuid4";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";
// import { Upload, File } from "lucide-react";

// function UploadPdf({ children }) {
//   const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
//   const addFileEntry = useMutation(api.fileStorage.AddfileEntry);
//   const getFileUrl = useMutation(api.fileStorage.getFileUrl);
//   const embeddDocument = useAction(api.myAction.ingest);
//   const { user } = useUser();
//   const [file, setFile] = useState();
//   const [loading, setLoading] = useState(false);
//   const [fileName, setfileName] = useState();
//   const [open, setOpen] = useState(false);

//   const OnFileSelect = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const OnUpLoad = async () => {
//     setLoading(true);

//     const postUrl = await generateUploadUrl();
//     const result = await fetch(postUrl, {
//       method: "POST",
//       headers: { "Content-Type": file?.type },
//       body: file,
//     });
//     const { storageId } = await result.json();

//     const fileId = uuid4();
//     const fileUrl = await getFileUrl({ storageId });

//     await addFileEntry({
//       fileId,
//       storageId,
//       fileName: fileName ?? "Untitled file",
//       createdBy: user?.primaryEmailAddress?.emailAddress,
//       fileUrl,
//     });

//     const Apiresp = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl);

//     await embeddDocument({
//       splitText: Apiresp.data.result,
//       fileId,
//     });

//     setLoading(false);
//     setOpen(false);
//   };
//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button
//           onClick={() => setOpen(true)}
//           className="w-full bg-gray-800 text-white hover:bg-gray-700
//             transition-all duration-300 py-6 rounded-lg flex items-center
//             justify-center gap-2 shadow-lg"
//         >
//           <Upload size={20} />
//           Upload PDF File
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="bg-gray-900 text-white border-gray-700
//         rounded-lg shadow-xl max-w-md w-full">
//         <DialogHeader>
//           <DialogTitle className="text-xl font-semibold text-gray-200">
//             Upload a PDF File
//           </DialogTitle>
//           <DialogDescription asChild>
//             <div className="space-y-6">
//               <div className="mt-4">
//                 <h2 className="text-gray-300 text-sm font-medium mb-2">
//                   Select a file to upload
//                 </h2>
//                 <div className="relative">
//                   <input
//                     type="file"
//                     accept="application/pdf"
//                     onChange={OnFileSelect}
//                     className="hidden"
//                     id="file-upload"
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="flex items-center justify-center w-full p-6
//                       border-2 border-dashed border-gray-700 rounded-lg
//                       hover:border-gray-500 transition-colors duration-300
//                       bg-gray-800 cursor-pointer"
//                   >
//                     <div className="text-center">
//                       {file ? (
//                         <div className="flex items-center gap-2 text-gray-300">
//                           <File size={20} />
//                           <span className="text-sm">{file.name}</span>
//                         </div>
//                       ) : (
//                         <div className="space-y-2">
//                           <Upload className="mx-auto h-8 w-8 text-gray-400" />
//                           <span className="text-sm text-gray-400">
//                             Click to upload or drag and drop
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </label>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-300">
//                   File Name
//                 </label>
//                 <Input
//                   placeholder="Enter file name"
//                   onChange={(e) => setfileName(e.target.value)}
//                   className="bg-gray-800 border-gray-700 text-white rounded-md
//                     focus:ring-2 focus:ring-gray-600 transition-all duration-300"
//                 />
//               </div>
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//         <DialogFooter className="flex justify-end gap-3 mt-6">
//           <DialogClose asChild>
//             <Button
//               type="button"
//               variant="secondary"
//               className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2
//                 rounded-md transition-colors duration-300"
//             >
//               Cancel
//             </Button>
//           </DialogClose>
//           <Button
//             onClick={OnUpLoad}
//             disabled={loading}
//             className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2
//               rounded-md transition-colors duration-300 flex items-center gap-2
//               disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? (
//               <>
//                 <Loader2Icon className="animate-spin h-4 w-4" />
//                 <span>Uploading...</span>
//               </>
//             ) : (
//               <>
//                 <Upload size={16} />
//                 <span>Upload</span>
//               </>
//             )}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default UploadPdf;

"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { useAction, useMutation } from "convex/react";
import { Loader2Icon, Upload, File, X } from "lucide-react";
import { api } from "../../../../convex/_generated/api";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

function UploadPdf({ children }) {
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const addFileEntry = useMutation(api.fileStorage.AddfileEntry);
  const getFileUrl = useMutation(api.fileStorage.getFileUrl);
  const embeddDocument = useAction(api.myAction.ingest);
  const { user } = useUser();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [fileName, setfileName] = useState("");
  const [open, setOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "application/pdf") {
      setFile(droppedFile);
      setfileName(droppedFile.name.replace(".pdf", ""));
    }
  };

  const OnFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setfileName(selectedFile.name.replace(".pdf", ""));
    }
  };

  const clearFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setfileName("");
  };

  const OnUpLoad = async () => {
    if (!file || !fileName.trim()) return;
    setLoading(true);
    setLoadingStep(0);

    try {
      // Step 1: Prepare file
      setLoadingStep(0);
      const postUrl = await generateUploadUrl();

      // Step 2: Upload PDF
      setLoadingStep(1);
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file?.type },
        body: file,
      });
      const { storageId } = await result.json();

      const fileId = uuid4();
      const fileUrl = await getFileUrl({ storageId });

      // Step 3: Process document
      setLoadingStep(2);
      await addFileEntry({
        fileId,
        storageId,
        fileName: fileName.trim(),
        createdBy: user?.primaryEmailAddress?.emailAddress,
        fileUrl,
      });

      const Apiresp = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl);

      // Step 4: Generate embeddings
      setLoadingStep(3);
      await embeddDocument({
        splitText: Apiresp.data.result,
        fileId,
      });

      setOpen(false);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
      setLoadingStep(0);
      setFile(null);
      setfileName("");
    }
  };
  const [loadingSteps] = useState([
    {
      title: "Preparing Upload",
      description: "Getting everything ready...",
    },
    {
      title: "Uploading PDF",
      description: "Securely transferring your document...",
    },
    {
      title: "Processing Document",
      description: "Analyzing and storing your file...",
    },
    {
      title: "Generating Embeddings",
      description: "Creating AI-readable format...",
    },
  ]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-1 py-6  w-full"
          >
            <div className="relative rounded-lg bg-gray-900 px-6 py-3 transition-colors group-hover:bg-gray-800 w-full flex items-center justify-center gap-2">
              <Upload
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              <span className="relative z-10 font-medium text-sm text-white">
                Upload PDF File
              </span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-md w-full mx-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-200">
              Upload PDF
            </DialogTitle>
            <DialogDescription className="text-gray-400 mt-1">
              Upload your PDF file to process and analyze its contents
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            <div
              className={`relative rounded-lg border-2 border-dashed p-6
              ${dragActive ? "border-gray-600 bg-gray-800" : "border-gray-700"} 
              ${file ? "bg-gray-800" : ""}
              transition-colors duration-200
            `}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="application/pdf"
                onChange={OnFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <div className="flex flex-col items-center justify-center gap-3">
                {file ? (
                  <div className="flex items-center gap-2 text-white">
                    <File size={24} className="text-gray-400" />
                    <span className="truncate max-w-[200px]">{file.name}</span>
                    <button
                      onClick={clearFile}
                      className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <X size={16} className="text-gray-400 hover:text-white" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload size={28} className="text-gray-400" />
                    <div className="text-center">
                      <p className="text-gray-300">
                        Drag and drop your PDF here, or click to browse
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="block text-sm text-gray-300">File Name</label>
              <Input
                value={fileName}
                placeholder="Enter a name for your file"
                onChange={(e) => setfileName(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 h-10"
              />
            </div>
          </div>

          <DialogFooter className="mt-6 flex gap-2">
            <Button
              onClick={() => setOpen(false)}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 h-10"
            >
              Cancel
            </Button>
            <Button
              onClick={OnUpLoad}
              disabled={loading || !file || !fileName.trim()}
              className={`flex-1 h-10 ${
                loading || !file || !fileName.trim()
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gray-800 hover:bg-gray-700"
              } text-white`}
            >
              Upload PDF
            </Button>
          </DialogFooter>
          {loading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gray-900/90 rounded-2xl p-8 max-w-md w-full mx-4 border border-gray-800 shadow-2xl">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                  Processing Your PDF
                </h3>
                <p className="text-gray-400">
                  Please wait while we process your document
                </p>
              </div>
      
              {/* Steps */}
              <div className="space-y-6">
                {loadingSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === loadingStep
                        ? "opacity-100 scale-105"
                        : index < loadingStep
                          ? "opacity-50"
                          : "opacity-30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${index === loadingStep 
                          ? "bg-emerald-500/20 text-emerald-500 ring-2 ring-emerald-500/20" 
                          : index < loadingStep
                            ? "bg-gray-800 text-gray-400"
                            : "bg-gray-800/50 text-gray-600"
                        }`}
                      >
                        {index < loadingStep ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                          </svg>
                        ) : index === loadingStep ? (
                          <Loader2Icon className="w-5 h-5 animate-spin" />
                        ) : (
                          <span className="text-sm font-medium">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <p className={`font-medium ${
                          index === loadingStep ? "text-white" : "text-gray-400"
                        }`}>
                          {step.title}
                        </p>
                        <p className={`text-sm ${
                          index === loadingStep ? "text-gray-400" : "text-gray-500"
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index !== loadingSteps.length - 1 && (
                      <div className="ml-5 mt-2 border-l-2 border-gray-800/50 h-6" />
                    )}
                  </div>
                ))}
              </div>
      
              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-700"
                    style={{
                      width: `${((loadingStep + 1) / loadingSteps.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-400">
                  {Math.round(((loadingStep + 1) / loadingSteps.length) * 100)}% Complete
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
        </DialogContent>
      </Dialog>
            
    </>
  );
}

export default UploadPdf;
