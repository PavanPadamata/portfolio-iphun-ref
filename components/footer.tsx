export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-6 md:py-8 px-4 md:px-6 bg-background dark:bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-foreground/50 font-light text-xs md:text-sm">
          © {currentYear} Pavan Padamata. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
