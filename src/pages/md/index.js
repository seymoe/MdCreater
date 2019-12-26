import { useRef } from 'react'
import 'codemirror/lib/codemirror.css'
import 'tui-editor/dist/tui-editor.min.css'
import 'tui-editor/dist/tui-editor-extScrollSync'
import { Editor } from '@toast-ui/react-editor'

export default function () {
  const editorEl = useRef(null)
  const input = '# This is a header\n\nAnd this is a paragraph'
  return (
    <div>
      <Editor
        ref={editorEl}
        initialValue={input}
        height="calc(100vh - 64px)"
        initialEditType="markdown"
        useCommandShortcut={true}
        previewStyle={window.innerWidth > 700 ? 'vertical': 'tab'}
        exts={[
          {
            name: 'chart',
            minWidth: 100,
            maxWidth: 600,
            minHeight: 100,
            maxHeight: 300
          },
          'scrollSync',
          'colorSyntax',
          'uml',
          'mark',
          'table'
        ]}
      />
    </div>
  )
}

