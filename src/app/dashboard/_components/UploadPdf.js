"use client";
import React, { use } from "react";
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
import { useState } from "react";
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
    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();
    console.log("storageid", storageId);

    const fileId = uuid4();
    const fileUrl = await getFileUrl({ storageId: storageId });

    const resp = await addFileEntry({
      fileId: fileId,
      storageId: storageId,
      fileName: fileName ?? "Untitled file",
      createdBy: user?.primaryEmailAddress?.emailAddress,
      fileUrl: fileUrl,
    });
    console.log(resp);
    console.log(fileUrl);

    const Apiresp = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl);
    console.log(Apiresp.data.result);
    await embeddDocument({
      splitText: Apiresp.data.result,
      fileId: fileId
    });

    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
      <Button onClick={() => setOpen(true)} className="w-full">
          +Upload PDF File
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="mt-5">Select a file to upload </h2>
              <div className="flex gap-2 p-3  mt-5 rounded-md border">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(event) => OnFileSelect(event)}
                />
              </div>
              <div className="mt-2">
                <label>File Name</label>
                <Input
                  placeholder="Enter file name"
                  onChange={(e) => setfileName(e.target.value)}
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={OnUpLoad} disabled={loading}>
            {/* disable it when loading is true */}
            {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadPdf;
