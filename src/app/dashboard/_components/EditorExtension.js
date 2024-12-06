import { Bold, Italic, Sparkles } from 'lucide-react'
import React from 'react'

function EditorExtension({editor}) {
    const onAiClick = () => {
        const selectedText = editor.state.doc.textBetween(editor.state.selection.from, editor.state.selection.to);
    }
  return (
    <div className=''>
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
            className={editor.isActive('italic') ? 'text-blue-600' : ''}
          >
            <Italic />
          </button>
          <button//ai button to generate text
            onClick={() => onAiClick()}
            className={'hover:text-blue-600'}
          >
            <Sparkles />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditorExtension;