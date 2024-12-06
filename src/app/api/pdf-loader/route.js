import { NextResponse } from "next/server";
import {WebPDFLoader} from "@langchain/community/document_loaders/web/pdf";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter"

// const pdfUrl="https://secret-panda-783.convex.cloud/api/storage/791f7e4d-8d96-4fdf-9363-48e043174e2f"
export async function GET(req){

    //load the pdf file
    const reqUrl=req.url;
    const {searchParams}=new URL(reqUrl);
    const pdfUrl=searchParams.get('pdfUrl');
    console.log(pdfUrl);
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