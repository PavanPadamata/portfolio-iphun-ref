# Pavan Padamata - Portfolio Website

A minimal, Apple-style portfolio website built with Next.js, featuring a markdown-based blog system and built-in analytics support.

## Features

- 🎨 **Minimal Apple-Inspired Design** - Clean, light theme with glassy aesthetics
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 📝 **Markdown Blog System** - Add blog posts by simply creating `.md` files
- 📊 **Analytics Ready** - Built-in Google Analytics, Google Tag Manager, and Vercel Analytics
- ⚡ **Performance Optimized** - Next.js with optimized fonts and images

## Project Structure

\`\`\`
.
├── app/
│   ├── layout.tsx           # Root layout with analytics
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── blog/
│   │   ├── page.tsx         # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx     # Individual blog post page
│   ├── projects/page.tsx    # Projects page
│   ├── contact/page.tsx     # Contact page
│   └── api/blog/route.ts    # Blog API endpoint
├── components/
│   ├── header.tsx           # Navigation header
│   ├── hero.tsx             # Hero section
│   ├── blog.tsx             # Blog component
│   ├── projects.tsx         # Projects component
│   ├── skills.tsx           # Skills section
│   ├── contact.tsx          # Contact section
│   ├── footer.tsx           # Footer
│   ├── markdown-renderer.tsx # Markdown rendering component
│   └── analytics-provider.tsx # Analytics configuration
├── lib/
│   └── blog.ts              # Blog post management utility
├── public/
│   └── blog/                # Markdown blog posts (add your posts here)
└── README.md                # This file
\`\`\`

## How to Add Blog Posts

### Step 1: Create a New Markdown File

Create a new `.md` file in the `public/blog/` directory. For example: `public/blog/my-first-post.md`

### Step 2: Use the Markdown Template

Each blog post must start with **frontmatter** (YAML metadata between `---` lines) followed by your markdown content:

\`\`\`markdown
---
title: Your Blog Post Title
date: 2024-12-20
excerpt: A brief excerpt that shows on the blog listing page
author: Your Name
---

# Your Blog Post Title

Your content goes here...

## Section Heading

More content with **bold**, *italic*, and `code`.

### Code Block

\`\`\`typescript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Images

![Alt text](https://example.com/image.png)

### Lists

- Item 1
- Item 2
- Item 3

### Links

[Link text](https://example.com)
\`\`\`

### Step 3: That's It!

The blog post will automatically appear on:
- The blog listing page (`/blog`)
- As an individual post at `/blog/your-post-slug`
- Posts are sorted by date (newest first)

## Markdown Features Supported

The markdown renderer supports:
- **Headings** (h1 to h6) - styled with Apple-inspired typography
- **Text formatting** - bold, italic, strikethrough
- **Code blocks** - with syntax highlighting
- **Inline code** - `` `code` ``
- **Lists** - ordered and unordered
- **Links** - internal and external
- **Images** - responsive and centered
- **Blockquotes** - styled with left border
- **Tables** - formatted with borders
- **Line breaks and paragraphs** - proper spacing

## Example Blog Posts

The following example posts are included in `public/blog/`:

1. `getting-started-with-kubernetes.md` - Kubernetes introduction
2. `terraform-best-practices.md` - Terraform guide
3. `cicd-pipeline-automation.md` - CI/CD automation
4. `docker-containerization.md` - Docker basics

Feel free to modify or delete these and add your own!

## Analytics Setup

### Google Analytics & Google Tag Manager

1. Get your **Google Tag Manager ID** from [Google Tag Manager Console](https://tagmanager.google.com)
   - Format: `GTM-XXXXXX`

2. Get your **Google Analytics ID** from [Google Analytics Console](https://analytics.google.com)
   - Format: `G-XXXXXXXXXX`

3. Add to your `.env.local` file:

\`\`\`env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

### Vercel Analytics

Vercel Analytics is automatically configured and tracks performance metrics.

### Environment Variables

Create a `.env.local` file in the root directory with your tracking IDs:

\`\`\`env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

**Note:** Analytics only load in production. They won't appear during local development (`npm run dev`).

## Local Development

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open in browser:**
   \`\`\`
   http://localhost:3000
   \`\`\`

4. **Add a blog post:**
   - Create `public/blog/my-post.md`
   - Refresh the browser - it will appear automatically!

## Build & Deploy

### Local Build

\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com)
3. Add your environment variables in Vercel project settings
4. Deploy!

## Customization

### Fonts

The site uses SF Pro Display (Apple's system font). To customize:
- Edit `app/globals.css` and change the font-family
- Fonts are imported from `next/font/google`

### Colors

The portfolio uses a minimal black & white theme:
- Edit `app/globals.css` to customize colors
- Tailwind CSS is used for styling

### Blog Styling

The markdown renderer styles blog posts with Apple-inspired typography. To customize:
- Edit `components/markdown-renderer.tsx`
- Adjust Tailwind classes for headings, paragraphs, code blocks, etc.

## Troubleshooting

**Blog posts not showing?**
- Make sure `.md` files are in `public/blog/`
- Check that frontmatter is properly formatted (between `---`)
- Refresh the page

**Analytics not working?**
- Verify environment variables are set in `.env.local`
- Analytics only work in production (not in `npm run dev`)
- Check that your GTM and GA IDs are correct

**Mobile layout looks off?**
- Ensure you're viewing in a mobile viewport (DevTools)
- Clear browser cache and refresh

## Support

For questions or issues:
1. Check the example blog posts for formatting reference
2. Review the markdown template section above
3. Verify environment variables are set correctly

## License

This portfolio is a personal project. Feel free to use it as inspiration for your own portfolio!

---

**Built with Next.js, Tailwind CSS, and ❤️**
