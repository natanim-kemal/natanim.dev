<div align="center">

<img src="public/pf.jpg" alt="Natanim Kemal" width="120" height="120" style="border-radius:50%; object-fit:cover;" />

# ✦ natanim.dev

**Backend · Security · Product Engineer**

A modern, responsive portfolio website built with Next.js 16, Tailwind CSS, and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwind-css)
![MDX](https://img.shields.io/badge/MDX-Blog-61dafb?logo=mdx)
![Giscus](https://img.shields.io/badge/Giscus-Comments-8b5cf6?logo=github)



</div>

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4, Geist (Google Fonts)
- **Language:** TypeScript
- **Content:** MDX blog (`content/blog/*.mdx`)
- **Comments:** Giscus (GitHub Discussions)
- **Contact:** Modal form → Telegram (`app/api/contact`)
- **Icons:** react-icons, lucide-react, custom images

## Project Structure

```
├── app/
│   ├── globals.css           # Global styles & CSS variables
│   ├── layout.tsx            # Root layout, dark-default theme
│   ├── page.tsx              # Main page: about, work, projects,
│   │                         #   open source, skills, contact
│   ├── api/contact/route.ts  # Telegram relay for the contact form
│   └── blog/
│       ├── page.tsx          # Blog index
│       └── [slug]/page.tsx   # Post page + Giscus discussion
├── components/
│   └── portfolio/
│       ├── BottomNav.tsx     # Fixed floating navigation pill
│       ├── ContactModal.tsx  # Contact form modal
│       ├── ContactButton.tsx # Hero/contact trigger
│       ├── DotBackground.tsx # Animated canvas dot field
│       ├── ExperienceSummary.tsx # Expandable experience rows
│       ├── GiscusTheme.tsx   # Giscus embed + theme sync
│       ├── LocalTime.tsx     # Live local clock (EAT)
│       ├── ProjectCard.tsx   # Project & open-source cards
│       └── Reveal.tsx        # Scroll reveal wrapper
├── content/
│   └── blog/                 # MDX posts live here
└── lib/
    ├── portfolio.ts          # All site content & data
    └── blog.ts               # Post discovery & parsing
```

## Develop

```bash
bun install
bun dev
```

Runs on **http://localhost:3000**. The production build (`bun run build`) prerenders every route statically.

## Blog posts

Add a `.mdx` file to `content/blog/` with frontmatter:

```mdx
---
title: "My post title"
date: "2026-11-04"
description: "One-line summary."
---

Write the post here.
```

## Contact form

Requires the following in `.env.local` (local) and in Vercel env vars (production):

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

Form submissions are forwarded to Telegram.

## Remote / Links

- Website: [natanim.dev](https://natanim.dev)
- GitHub: [@natanim-kemal](https://github.com/natanim-kemal)
- Telegram: [@phnatanim](https://t.me/phnatanim)
- Email: reachnatanim@gmail.com

---

<div align="center">

Built with Next.js & Tailwind CSS by <a href="https://github.com/natanim-kemal">@natanim-kemal</a>

</div>
