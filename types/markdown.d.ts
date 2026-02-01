
interface MarkdownCode {
  type: "code"
  content: string
}

interface MarkdownParagraph {
  type: "paragraph"
  content: string
}

interface MarkdownHeading {
  type: "heading"
  content: string
  level?: number
}



type MarkdownLine = MarkdownCode | MarkdownParagraph | MarkdownHeading