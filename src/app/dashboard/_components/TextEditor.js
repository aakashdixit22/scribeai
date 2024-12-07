import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import EditorExtension from "./EditorExtension";
import Underline from "@tiptap/extension-underline";
function TextEditor() {
  const editor = useEditor({
    extensions: [
      
      StarterKit,
      Placeholder.configure({ placeholder: "Start typing..." }),
      TextAlign.configure({
        types: ["heading", "paragraph"], // Allow text alignment for these types
      }),
      Highlight,
      Heading.configure({
        levels: [1, 2, 3], // Support for H1, H2, and H3
      }),
      Underline,
    ],
    editorProps: {
      attributes: {
        class: "focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl p-3",
      },
    },
  });

  if (!editor) {
    return null; // Render nothing while the editor is initializing
  }

  return (
    <div className="p-3 border rounded shadow-sm">
      <EditorExtension editor={editor} />
      <div className="p-3 bg-white rounded-md shadow">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TextEditor;
