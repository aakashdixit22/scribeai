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
} from 'lucide-react';
import React from 'react';

function EditorExtension({ editor }) {
  const onAiClick = () => {
      const selectedText = editor.state.doc.textBetween(
          editor.state.selection.from,
          editor.state.selection.to
      );
      console.log('Selected Text:', selectedText);
  };

  return (
      <div className="">
          <div className="control-group">
              <div className="button-group flex gap-3">
                  <button
                      onClick={() => editor.chain().focus().toggleBold().run()}
                      className={editor.isActive('bold') ? 'text-blue-600' : ''}
                  >
                      <Bold />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleItalic().run()}
                      className={editor.isActive('italic') ? 'text-blue-600' : ''}
                  >
                      <Italic />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleUnderline().run()}
                      className={editor.isActive('underline') ? 'text-blue-600' : ''}
                  >
                      <Underline />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleCode().run()}
                      className={editor.isActive('code') ? 'text-blue-600' : ''}
                  >
                      <Code />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleBulletList().run()}
                      className={editor.isActive('bulletList') ? 'text-blue-600' : ''}
                  >
                      <List />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().setTextAlign('left').run()}
                      className={
                          editor.isActive({ textAlign: 'left' }) ? 'text-blue-600' : ''
                      }
                  >
                      <AlignLeft />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().setTextAlign('center').run()}
                      className={
                          editor.isActive({ textAlign: 'center' }) ? 'text-blue-600' : ''
                      }
                  >
                      <AlignCenter />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().setTextAlign('right').run()}
                      className={
                          editor.isActive({ textAlign: 'right' }) ? 'text-blue-600' : ''
                      }
                  >
                      <AlignRight />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                      className={
                          editor.isActive('heading', { level: 1 }) ? 'text-blue-600' : ''
                      }
                  >
                      <Heading1 />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                      className={
                          editor.isActive('heading', { level: 2 }) ? 'text-blue-600' : ''
                      }
                  >
                      <Heading2 />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                      className={
                          editor.isActive('heading', { level: 3 }) ? 'text-blue-600' : ''
                      }
                  >
                      <Heading3 />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleHighlight().run()}
                      className={editor.isActive('highlight') ? 'text-blue-600' : ''}
                  >
                      <Highlighter />
                  </button>
                  <button
                      onClick={() => onAiClick()}
                      className={'hover:text-blue-600'}
                  >
                      <Sparkles />
                  </button>
              </div>
          </div>
      </div>
  );
}

export default EditorExtension;
