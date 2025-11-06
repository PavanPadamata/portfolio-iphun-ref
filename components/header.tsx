"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-center md:justify-between gap-2 md:gap-4">
        {/* Logo - hidden on mobile, shown on desktop */}
        <Link
          href="/"
          className="hidden md:block text-base md:text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity duration-300 whitespace-nowrap"
        >
          Pavan Padamata
        </Link>

        {/* Compact pill navigation - centered on mobile, spaced on desktop */}
        <div className="flex items-center justify-center gap-1 md:gap-3 px-2 md:px-0">
          <Link
            href="/"
            className="hidden sm:inline-block px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ease-out hover:bg-black/5"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="px-2.5 md:px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ease-out hover:bg-black/5 whitespace-nowrap"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="px-2.5 md:px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ease-out hover:bg-black/5 whitespace-nowrap"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="px-2.5 md:px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ease-out bg-black text-white hover:bg-black/90 whitespace-nowrap"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
