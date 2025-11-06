import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background dark:bg-black">
      <Header />
      <Hero />
      <Skills />
      <Footer />
    </main>
  )
}
