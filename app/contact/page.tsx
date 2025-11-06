import Header from "@/components/header"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="bg-background dark:bg-black">
      <Header />
      <div className="pt-20 md:pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
