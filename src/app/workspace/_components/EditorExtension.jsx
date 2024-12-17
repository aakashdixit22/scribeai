import { useAction, useMutation } from "convex/react";
import {
  Bold,
  Italic,
  Sparkles,
  Underline,
  Code,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Highlighter,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react";
import React, { useEffect } from "react";
import { api } from "@/../convex/_generated/api";
import { run } from "@/helper/AIModel";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { useNotes } from "@/lib/context";

function EditorExtension({ editor, fileId }) {
  
  const {setNotes } = useNotes();

  const saveNotes = useMutation(api.notes.AddNotes);
  const {user} = useUser();
  const SearchAI = useAction(api.myAction.search);
  const onAiClick = async () => {
    toast("Analyzing the selected text...")
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      " " // Separator string
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

    const AllText = editor.getHTML();
    editor.commands.setContent(AllText +'<p><strong>Answer: </strong>'+response.response+'</p>');
    await saveNotes({
      fileId: fileId,
      notes: editor.getHTML(),
      createdBy: user?.primaryEmailAddress?.emailAddress
    });
    toast("AI response added to the editor.")

  };

  editor.on('update', () => {
    setNotes(editor.getHTML());
  })
  


  return (
    <div className="">
      <div className="control-group">
        <div className="button-group flex gap-3">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "text-blue-600" : ""}
          >
            <Bold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "text-blue-600" : ""}
          >
            <Italic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "text-blue-600" : ""}
          >
            <Underline />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "text-blue-600" : ""}
          >
            <Code />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "text-blue-600" : ""}
          >
            <List />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={
              editor.isActive({ textAlign: "left" }) ? "text-blue-600" : ""
            }
          >
            <AlignLeft />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" }) ? "text-blue-600" : ""
            }
          >
            <AlignCenter />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={
              editor.isActive({ textAlign: "right" }) ? "text-blue-600" : ""
            }
          >
            <AlignRight />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "text-blue-600" : ""
            }
          >
            <Heading1 />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "text-blue-600" : ""
            }
          >
            <Heading2 />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "text-blue-600" : ""
            }
          >
            <Heading3 />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive("highlight") ? "text-blue-600" : ""}
          >
            <Highlighter />
          </button>
          <button onClick={() => onAiClick()} className={"hover:text-blue-600"}>
            <Sparkles />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorExtension;
