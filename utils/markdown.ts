
const calculateHeadingLevel = (line: string) => {
  let level = 0
  for (let j = 0; j < line.length; j++) {
    if (line[j] === "#") {
      level++
    } else {
      break
    }
  }
  return level
}

export const handleContentToMarkdownLines = (content: string): MarkdownLine[] => {
  const lines = content.split("\n")
  const markdownLines: MarkdownLine[] = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    // 处理heading标题
    if (line.startsWith("#")) {
      const level = calculateHeadingLevel(line)
      const reg = new RegExp(`^#${"#".repeat(level - 1)}`)
      markdownLines.push({
        type: "heading",
        content: line.replace(reg, "").trim(),
        level: level
      })
    } else if (line.startsWith("```")) {
      // 需要找到下一个```处，将之间的内容作为代码块
      let endIndex = i + 1
      while (endIndex < lines.length && !lines[endIndex].endsWith("```")) {
        endIndex++
      }
      // 获取到当前使用的语言
      const lang = lines[i].substring(3).trim()
      markdownLines.push({
        type: "code",
        content: lines.slice(i + 1, endIndex).join("\n").trim(),
        lang: lang
      })
      // 将i更新为endIndex，跳过代码块
      i = endIndex
    } else {
      // 普通文本行
      markdownLines.push({
        type: "paragraph",
        content: line
      })
    }

  }
  return markdownLines
}