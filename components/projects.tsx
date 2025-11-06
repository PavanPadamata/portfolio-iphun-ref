"use client"

import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Kubernetes Deployment Pipeline",
      description: "End-to-end CI/CD pipeline for containerized applications with automated rollouts and monitoring.",
      tags: ["Kubernetes", "Docker", "Jenkins", "Prometheus"],
      github: "https://github.com",
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform modules for multi-cloud infrastructure provisioning with complete state management.",
      tags: ["Terraform", "AWS", "Azure", "Git"],
      github: "https://github.com",
    },
    {
      title: "Monitoring & Observability",
      description: "Centralized logging and monitoring solution using Prometheus, Grafana, and ELK stack.",
      tags: ["Prometheus", "Grafana", "ELK", "Linux"],
      github: "https://github.com",
    },
    {
      title: "Shell Automation Suite",
      description: "Collection of robust shell scripts for server management, backup, and deployment automation.",
      tags: ["Bash", "Shell", "Linux", "Automation"],
      github: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-background border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 md:mb-16 text-center text-foreground">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group p-6 md:p-8 rounded-2xl border border-black/10 bg-white/50 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:bg-white/60 hover:border-black/20"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground group-hover:text-foreground/90">
                {project.title}
              </h3>
              <p className="text-foreground/60 font-light mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 backdrop-blur-sm bg-black/5 border border-black/10 text-foreground/70 text-xs rounded-full font-medium transition-all duration-300 group-hover:bg-black/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium group-hover:gap-3"
              >
                View on GitHub →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
