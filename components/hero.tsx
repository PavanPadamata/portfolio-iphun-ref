"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [linkedinImage, setLinkedinImage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLinkedinImage("https://api.dicebear.com/7.x/avataaars/svg?seed=cloudDevOps")
    setLoading(false)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 bg-background dark:bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 md:mb-8 fade-in-up">
          <div className="relative w-24 md:w-32 h-24 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10 bg-muted dark:bg-gray-900">
            {!loading && linkedinImage && (
              <Image src={linkedinImage || "/placeholder.svg"} alt="Profile" fill className="object-cover" priority />
            )}
          </div>
        </div>

        <div className="mb-8 md:mb-12 fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 md:mb-4 text-foreground">
            Cloud & DevOps Engineer
          </h1>
          <p className="text-base md:text-lg text-foreground/60 font-light mb-2 md:mb-3 px-4">
            DevOps & Cloud Engineer specializing in scalable infrastructure, automation, CI/CD pipelines, containers,
            and cloud-native deployments.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 fade-in-up px-4"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full font-medium tracking-tight transition-all duration-300 ease-out bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 border border-black dark:border-white"
          >
            Get in Touch
          </Link>
          <button
            onClick={handleDownloadResume}
            className="px-6 py-3 rounded-full font-medium tracking-tight transition-all duration-300 ease-out bg-white text-black hover:bg-black/5 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 border border-black/20 dark:border-white/20"
          >
            Download Résumé
          </button>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 fade-in-up px-4"
          style={{ animationDelay: "0.3s" }}
        >
          <SkillIcon icon="🐧" label="Linux" />
          <SkillIcon icon="📦" label="Terraform" />
          <SkillIcon icon="☸️" label="Kubernetes" />
          <SkillIcon icon="🐳" label="Docker" />
          <SkillIcon icon="📝" label="Scripting" />
          <SkillIcon icon="🔄" label="CI/CD" />
          <SkillIcon icon="🐙" label="GitHub" />
        </div>
      </div>
    </section>
  )
}

function SkillIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 md:gap-2 group cursor-pointer">
      <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <span className="text-xs text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300">
        {label}
      </span>
    </div>
  )
}
