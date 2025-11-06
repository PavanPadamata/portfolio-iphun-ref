import Header from "@/components/header"
import Blog from "@/components/blog"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="bg-background dark:bg-black">
      <Header />
      <div className="pt-20 md:pt-24">
        <Blog />
      </div>
      <Footer />
    </main>
  )
}
