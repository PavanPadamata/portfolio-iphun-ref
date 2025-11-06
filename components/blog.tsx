"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { BlogPost } from "@/lib/blog"

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <section id="blog" className="py-16 md:py-20 px-4 md:px-6 bg-background border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 md:mb-16 text-center text-foreground">
          Blog & Articles
        </h2>

        <div className="space-y-4 md:space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group p-6 md:p-8 rounded-2xl border border-black/10 bg-white/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-102 hover:-translate-y-0.5 cursor-pointer hover:bg-white/60 hover:border-black/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground group-hover:text-foreground/90 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-foreground/60 font-light mb-3 leading-relaxed text-sm md:text-base">
                        {post.excerpt}
                      </p>
                    </div>
                    <time className="text-xs md:text-sm text-foreground/40 font-light whitespace-nowrap md:text-right">
                      {post.date}
                    </time>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground/60">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
