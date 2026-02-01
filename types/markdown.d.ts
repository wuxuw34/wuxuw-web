interface MarkdownBreak {
  type: "break"
}
interface MarkdownCode {
  type: "code"
  content: string
  lang: string
}

interface MarkdownParagraph {
  type: "paragraph"
  content: string
}

interface MarkdownHeading {
  type: "heading"
  content: string
  level: number
}



type MarkdownLine = MarkdownCode | MarkdownParagraph | MarkdownHeading | MarkdownBreak