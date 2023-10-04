import { useState, useEffect } from 'react'
import MarkdownEditor from '@/components/MarkdownEditor'
import MarkdownPreview from '@/components/MarkdownPreview'
import defaultMarkdown from '@/markdown/sample.md'

export default function Home() {

    const [markdownContent, setMarkdownContent] = useState(defaultMarkdown)

    useEffect(() => {
        const savedMarkdown = localStorage.getItem('savedMarkdown')
        if (savedMarkdown) {
            setMarkdownContent(savedMarkdown)
        }
    }, [])

    const handleEditorChange = (newContent) => {
        setMarkdownContent(newContent)
        localStorage.setItem('savedMarkdown', newContent)
    }

    const wordCount = markdownContent.split(/\s+/).filter(Boolean).length
    const lineCount = markdownContent.split(/\n+/).filter(Boolean).length
    const charCount = markdownContent.length
    const fileSize = new Blob([markdownContent]).size

    return (
        <>
            <div className="flex flex-col h-screen relative">
                <div className="flex-grow flex">
                    <MarkdownEditor value={markdownContent} onChange={handleEditorChange} />
                    <MarkdownPreview content={markdownContent} />
                </div>
                <div className="fixed font-['MonoLisa'] text-xs bottom-0 left-0 right-0 px-3 py-1 text-slate-700 bg-slate-200 border-t border-slate-200 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400">
                    <span className="mr-6"><strong>{wordCount}</strong> words</span>
                    <span className="mr-6"><strong>{lineCount}</strong> lines</span>
                    <span className="mr-6"><strong>{charCount}</strong> characters</span>
                    <span><strong>{fileSize} bytes</strong></span>
                </div>
            </div>
        </>
    )
}