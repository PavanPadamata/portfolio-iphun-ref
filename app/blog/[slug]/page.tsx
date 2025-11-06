import { getBlogPost, getBlogPosts } from "@/lib/blog"
import MarkdownRenderer from "@/components/markdown-renderer"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <main className="bg-background">
        <Header />
        <div className="pt-20 md:pt-24 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Back to blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-background">
      <Header />
      <div className="pt-20 md:pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
            ← Back to blog
          </Link>

          <article className="prose prose-sm md:prose max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-black/10">
              <time className="text-sm text-foreground/60">{post.date}</time>
              <span className="text-sm text-foreground/60">by {post.author}</span>
            </div>

            <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed space-y-4">
              <MarkdownRenderer content={post.content} />
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
