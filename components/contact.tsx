"use client"

import Link from "next/link"

export default function Contact() {
  const contacts = [
    {
      name: "Gmail",
      icon: "✉️",
      url: "mailto:pavanpadmata2002@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/pavanpadamata",
    },
    {
      name: "Telegram",
      icon: "✈️",
      url: "https://telegram.me/yourhandle",
    },
    {
      name: "Upwork",
      icon: "💻",
      url: "https://upwork.com",
    },
    {
      name: "Fiverr",
      icon: "⭐",
      url: "https://fiverr.com/pavanpadmata",
    },
  ]

  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-4 md:px-6 bg-muted dark:bg-gray-900 border-t border-black/5 dark:border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-foreground/60 font-light text-base md:text-lg px-4">
            Let's work together. Reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {contacts.map((contact, idx) => (
            <Link key={idx} href={contact.url} target="_blank" rel="noopener noreferrer">
              <div className="group p-4 md:p-6 bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 rounded-2xl hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 ease-out hover:shadow-lg flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground/70 dark:text-foreground/70 group-hover:text-foreground dark:group-hover:text-foreground">
                  {contact.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
