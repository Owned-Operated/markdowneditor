import React from 'react'

function MarkdownEditor({ value, onChange }) {
	return (
		<textarea
			value={value}
			onChange={(e) => onChange(e.target.value)}
			rows={30}
			className="w-1/2 h-full p-6 md:px-10 md:py-8 border-r border-slate-300 resize-none dark:border-slate-600 dark:bg-slate-600 dark:text-slate-300"
		/>
	)
}

export default MarkdownEditor