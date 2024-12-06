import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorExtension from "./EditorExtension";

function TextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Start typing..." }),
      
    ],

    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });
  if (!editor) {
    return null; // Render nothing while the editor is initializing
  }

  return (
    <div className="p-3">
      <EditorExtension editor={editor}/>
      <div className="p-3">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TextEditor;
