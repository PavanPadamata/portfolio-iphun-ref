export default function Skills() {
  const skillCategories = [
    {
      title: "DevOps & Containers",
      skills: ["Docker", "Docker Compose", "Kubernetes"],
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform"],
    },
    {
      title: "CI/CD & Automation",
      skills: ["Jenkins", "Shell Scripting"],
    },
    {
      title: "Version Control & OS",
      skills: ["GitHub", "Linux"],
    },
    {
      title: "Programming & Automation",
      skills: ["Python", "Ansible"],
    },
    {
      title: "Monitoring & Observability",
      skills: ["Grafana", "Prometheus"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 bg-background border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 md:mb-16 text-center">
          Skills & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 border border-black/10 rounded-2xl hover:border-black/30 transition-all duration-300 ease-out bg-white/50 backdrop-blur-md shadow-sm"
            >
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-black/5 text-black/70 text-xs md:text-sm rounded-lg font-medium hover:bg-black/10 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
