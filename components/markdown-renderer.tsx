"use client"

export default function MarkdownRenderer({ content }: { content: string }) {
  const parseMarkdown = (md: string) => {
    let html = md

    // Headers
    html = html.replace(/^### (.*?)$/gm, '<h3 className="text-xl font-semibold mt-6 mb-3">$1</h3>')
    html = html.replace(/^## (.*?)$/gm, '<h2 className="text-2xl font-bold mt-8 mb-4">$1</h2>')
    html = html.replace(/^# (.*?)$/gm, '<h1 className="text-3xl font-bold mt-8 mb-4">$1</h1>')

    // Bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>")

    // Links
    html = html.replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2" className="text-blue-600 hover:underline">$1</a>')

    // Code blocks
    html = html.replace(
      /```(.*?)\n([\s\S]*?)```/g,
      '<pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>$2</code></pre>',
    )

    // Inline code
    html = html.replace(/`(.*?)`/g, '<code className="bg-gray-100 px-2 py-1 rounded">$1</code>')

    // Line breaks and paragraphs
    html = html.split("\n\n").join("</p><p>")
    html = `<p>${html}</p>`

    return html
  }

  return <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
}
