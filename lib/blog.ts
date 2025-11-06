import fs from "fs"
import path from "path"

const blogsDirectory = path.join(process.cwd(), "public/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author?: string
}

// Simple frontmatter parser (replaces gray-matter)
function parseFrontmatter(fileContent: string): { data: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = fileContent.match(frontmatterRegex)

  if (!match) {
    return { data: {}, content: fileContent }
  }

  const data: Record<string, string> = {}
  const frontmatterLines = match[1].split("\n")

  for (const line of frontmatterLines) {
    const [key, ...valueParts] = line.split(":")
    if (key && valueParts.length > 0) {
      data[key.trim()] = valueParts
        .join(":")
        .trim()
        .replace(/^["']|["']$/g, "")
    }
  }

  return {
    data,
    content: match[2],
  }
}

export function getBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(blogsDirectory)) {
      return []
    }

    const files = fs.readdirSync(blogsDirectory).filter((file) => file.endsWith(".md"))

    const posts: BlogPost[] = files
      .map((file) => {
        try {
          const filePath = path.join(blogsDirectory, file)
          const fileContent = fs.readFileSync(filePath, "utf8")
          const { data, content } = parseFrontmatter(fileContent)

          return {
            slug: file.replace(".md", ""),
            title: data.title || "Untitled",
            date: data.date || new Date().toISOString().split("T")[0],
            excerpt: data.excerpt || content.substring(0, 150).replace(/#+\s/g, "").trim(),
            content: content,
            author: data.author || "Pavan Padamata",
          }
        } catch (error) {
          console.error(`Error parsing blog file ${file}:`, error)
          return null
        }
      })
      .filter((post): post is BlogPost => post !== null)

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Error reading blog directory:", error)
    return []
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = parseFrontmatter(fileContent)

    return {
      slug: slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || content.substring(0, 150),
      content: content,
      author: data.author || "Pavan Padamata",
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}
