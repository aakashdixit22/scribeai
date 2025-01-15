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
import { Loader2Icon } from "lucide-react";
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
  const [fileName, setfileName] = useState();
  const [open, setOpen] = useState(false);

  const OnFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const OnUpLoad = async () => {
    setLoading(true);

    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();

    const fileId = uuid4();
    const fileUrl = await getFileUrl({ storageId });

    await addFileEntry({
      fileId,
      storageId,
      fileName: fileName ?? "Untitled file",
      createdBy: user?.primaryEmailAddress?.emailAddress,
      fileUrl,
    });

    const Apiresp = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl);

    await embeddDocument({
      splitText: Apiresp.data.result,
      fileId,
    });

    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="w-full bg-gray-800 text-white hover:bg-gray-700"
        >
          + Upload PDF File
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-gray-200">
            Upload a PDF File
          </DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="mt-5 text-gray-300">Select a file to upload</h2>
              <div className="flex gap-2 p-3 mt-5 rounded-md border border-gray-700 bg-gray-800">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={OnFileSelect}
                  className="text-white"
                />
              </div>
              <div className="mt-2">
                <label className="text-gray-300">File Name</label>
                <Input
                  placeholder="Enter file name"
                  onChange={(e) => setfileName(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="bg-gray-700 text-white hover:bg-gray-600">
              Close
            </Button>
          </DialogClose>
          <Button
            onClick={OnUpLoad}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 text-white"
          >
            {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadPdf;
