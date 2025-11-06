"use client"

import { useEffect } from "react"

interface AnalyticsConfig {
  googleTagManagerId?: string
  googleAnalyticsId?: string
  vercelAnalyticsEnabled?: boolean
}

const analyticsConfig: AnalyticsConfig = {
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID,
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  vercelAnalyticsEnabled: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED === "true",
}

export default function AnalyticsProvider() {
  useEffect(() => {
    // Only load analytics in production
    if (process.env.NODE_ENV !== "production") {
      return
    }

    // Google Tag Manager
    if (analyticsConfig.googleTagManagerId) {
      const script1 = document.createElement("script")
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleTagManagerId}`
      document.head.appendChild(script1)

      const script2 = document.createElement("script")
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${analyticsConfig.googleTagManagerId}');
      `
      document.head.appendChild(script2)
    }

    // Google Analytics
    if (analyticsConfig.googleAnalyticsId) {
      const script = document.createElement("script")
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalyticsId}`
      document.head.appendChild(script)

      const inlineScript = document.createElement("script")
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${analyticsConfig.googleAnalyticsId}');
      `
      document.head.appendChild(inlineScript)
    }
  }, [])

  return null
}
