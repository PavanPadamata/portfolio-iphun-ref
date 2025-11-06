"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme") || "light"
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  if (!mounted) return children

  return <>{children}</>
}
