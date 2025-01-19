import { useAction, useMutation } from "convex/react";
import {
  Bold, Italic, Sparkles, Underline, Code, List,
  AlignLeft, AlignCenter, AlignRight, Highlighter,
  Heading1, Heading2, Heading3, FileDown,
  FileText
} from "lucide-react";
import React from "react";
import { api } from "@/../convex/_generated/api";
import { run } from "@/helper/AIModel";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { useNotes } from "@/lib/context";

function EditorExtension({ editor, fileId }) {
  const { setNotes } = useNotes();
  const saveNotes = useMutation(api.notes.AddNotes);
  const { user } = useUser();
  const SearchAI = useAction(api.myAction.search);

  const onAiClick = async () => {
    toast("Analyzing the selected text...");
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      " "
    );
    const unformattedResult = await SearchAI({
      query: selectedText,
      fileId: fileId,
    });
    const resultList = JSON.parse(unformattedResult);
    let formattedResultList = [];
    resultList.forEach((item) => formattedResultList.push(item.pageContent));

    const PROMPT = `Based on the query: "${selectedText}", analyze the following vector search results and generate a concise and well-structured response. Use the provided context to create an accurate and detailed answer directly:
                    Vector Search Results:
                    ${formattedResultList.join("\n")}
                    Answer:`;

    const response = await run(PROMPT);
    editor.commands.setContent(editor.getHTML() + `<p><strong>Answer: </strong>${response.response}</p>`);

    await saveNotes({
      fileId: fileId,
      notes: editor.getHTML(),
      createdBy: user?.primaryEmailAddress?.emailAddress
    });

    toast("AI response added to the editor.");
  };

  const downloadAsPDF = async () => {
    try {
      const content = editor.getHTML();
      // Create a temporary element to render the HTML
      const element = document.createElement('div');
      element.innerHTML = content;
      
      // Convert to PDF using html2pdf (you'll need to add this dependency)
      const html2pdf = (await import('html2pdf.js')).default;
      const opt = {
        margin: 1,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      html2pdf().set(opt).from(element).save();
      toast("PDF download started");
    } catch (error) {
      toast.error("Error downloading PDF");
      console.error("PDF download error:", error);
    }
  };

  const downloadAsDocx = async () => {
    try {
      const content = editor.getHTML();
      // Convert HTML to DOCX using html-docx-js (you'll need to add this dependency)
      const htmlDocx = await import('html-docx-js/dist/html-docx');
      const converted = htmlDocx.asBlob(content);
      
      // Create download link
      const url = window.URL.createObjectURL(converted);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'document.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast("DOCX download started");
    } catch (error) {
      toast.error("Error downloading DOCX");
      console.error("DOCX download error:", error);
    }
  };

  editor.on('update', () => {
    setNotes(editor.getHTML());
  });

  return (
    <div className="flex flex-wrap gap-3 bg-gray-800 rounded-md">
      {/* Text Formatting */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("bold") ? "text-blue-500" : "text-gray-300"}`}
      >
        <Bold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("italic") ? "text-blue-500" : "text-gray-300"}`}
      >
        <Italic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("underline") ? "text-blue-500" : "text-gray-300"}`}
      >
        <Underline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("code") ? "text-blue-500" : "text-gray-300"}`}
      >
        <Code />
      </button>

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("bulletList") ? "text-blue-500" : "text-gray-300"}`}
      >
        <List />
      </button>

      {/* Text Alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive({ textAlign: "left" }) ? "text-blue-500" : "text-gray-300"}`}
      >
        <AlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive({ textAlign: "center" }) ? "text-blue-500" : "text-gray-300"}`}
      >
        <AlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive({ textAlign: "right" }) ? "text-blue-500" : "text-gray-300"}`}
      >
        <AlignRight />
      </button>

      {/* Headings */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("heading", { level: 1 }) ? "text-blue-500" : "text-gray-300"}`}
      >
        <Heading1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("heading", { level: 2 }) ? "text-blue-500" : "text-gray-300"}`}
      >
        <Heading2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("heading", { level: 3 }) ? "text-blue-500" : "text-gray-300"}`}
      >
        <Heading3 />
      </button>

      {/* Highlight */}
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`p-2 rounded-md hover:bg-gray-700 transition ${editor.isActive("highlight") ? "text-blue-500" : "text-gray-300"}`}
      >
        <Highlighter />
      </button>

      {/* AI Assistant */}
      <button 
        onClick={onAiClick} 
        className="p-2 rounded-md hover:text-blue-500 hover:bg-gray-700 transition"
      >
        <Sparkles />
      </button>

      {/* Download Buttons */}
      <button
  onClick={downloadAsPDF}
  className="p-2 rounded-md hover:bg-gray-700 transition text-gray-300 relative group"
  title="Download as PDF"
>
  <img 
    src='/pdfSvg.svg' 
    alt="PDF" 
    className="w-7 h-7 hover:opacity-80 transition"
  />
</button>
<button
  onClick={downloadAsDocx}
  className="p-2 rounded-md hover:bg-gray-700 transition text-gray-300 relative group"
  title="Download as DOCX"
>
  <img 
    src='/wordSvg.svg' 
    alt="DOCX" 
    className="w-7 h-7 hover:opacity-80 transition"
  />
</button>
    </div>
  );
}

export default EditorExtension;