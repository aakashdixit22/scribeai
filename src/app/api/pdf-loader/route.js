import { NextResponse } from "next/server";
import {WebPDFLoader} from "@langchain/community/document_loaders/web/pdf";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter"

const pdfUrl="https://secret-panda-783.convex.cloud/api/storage/136a2b5b-59b3-4fd9-89e9-4d2207cc67c9"
export async function GET(req){

    //load the pdf file
    const response=await fetch(pdfUrl);
    const data=await response.blob();
    const loader=new WebPDFLoader(data);
    const pdf=await loader.load();
    let pdfTextContent='';
    pdf.forEach(page=>{
        pdfTextContent=pdfTextContent+page.pageContent;
    });

    //2.split the text into smaller chunks
    const splitter= new RecursiveCharacterTextSplitter({
        chunkSize:100,
        chunkOverlap:20,
    })
    const output=await splitter.createDocuments([pdfTextContent]);
    //store it in form of list 
    let splitterlist=[]
    output.forEach(page=>{
        splitterlist.push(page.pageContent);

    })
    return NextResponse.json({result:splitterlist}); 
}