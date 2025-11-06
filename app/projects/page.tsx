import Header from "@/components/header"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="bg-background dark:bg-black">
      <Header />
      <div className="pt-20 md:pt-24">
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
