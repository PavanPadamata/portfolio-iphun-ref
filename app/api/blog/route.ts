import { getBlogPosts } from "@/lib/blog"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const posts = getBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Blog API error:", error)
    return NextResponse.json([], { status: 200 })
  }
}
