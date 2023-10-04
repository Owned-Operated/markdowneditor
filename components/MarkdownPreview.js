import React from 'react'
import * as marked from 'marked'

function MarkdownPreview({ content }) {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
			className="w-1/2 h-full p-4 bg-slate-100 overflow-y-auto dark:bg-slate-700 dark:text-slate-200"
		/>
	)
}

export default MarkdownPreview