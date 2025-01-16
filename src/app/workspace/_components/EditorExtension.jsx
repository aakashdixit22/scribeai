import { useAction, useMutation } from "convex/react";
import {
  Bold, Italic, Sparkles, Underline, Code, List,
  AlignLeft, AlignCenter, AlignRight, Highlighter,
  Heading1, Heading2, Heading3
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
      <button onClick={onAiClick} className="p-2 rounded-md hover:text-blue-500 hover:bg-gray-700 transition">
        <Sparkles />
      </button>
    </div>
  );
}

export default EditorExtension;
