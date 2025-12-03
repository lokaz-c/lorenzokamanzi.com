# 🚀 Implementation Guide

Step-by-step guide to get your portfolio running and customize it.

---

## 📋 Quick Start (5 minutes)

### 1. Install Dependencies

```bash
cd portfolio-site
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. See Your Portfolio

You should see:
- Animated hero section with your name
- Smooth scroll animations
- All sections loaded
- Theme switcher in bottom-right

---

## ✏️ Customization Checklist

### Personal Information (30 minutes)

#### 1. Update Hero Section

**File:** [app/components/sections/Hero.tsx](app/components/sections/Hero.tsx)

```tsx
// Line 28: Change your name
<h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-black">
  Your Full Name
</h1>

// Line 39: Update subheadline
<p className="text-2xl md:text-3xl text-soft-black mb-4 font-light">
  Your Major × Your Second Major
</p>

// Line 48: Update description
<p className="text-lg md:text-xl text-deep-charcoal/70 mb-12 max-w-2xl mx-auto font-light">
  Your personal tagline here. Class of 20XX.
</p>
```

#### 2. Update About Section

**File:** [app/components/sections/About.tsx](app/components/sections/About.tsx)

```tsx
// Line 8-11: Update fun facts
const funFacts = [
  { id: 1, emoji: '📊', text: 'Your fact 1' },
  { id: 2, emoji: '💻', text: 'Your fact 2' },
  { id: 3, emoji: '🎯', text: 'Your fact 3' },
  { id: 4, emoji: '⚡', text: 'Your fact 4' },
]

// Line 49-67: Update bio paragraphs
<p>Your first paragraph about yourself...</p>
<p>Your second paragraph...</p>
<p>Your third paragraph about what you're seeking...</p>
```

#### 3. Update Projects

**File:** [app/components/sections/Projects.tsx](app/components/sections/Projects.tsx)

```tsx
// Line 6: Replace entire projects array
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'One-sentence description.',
    bullets: [
      'Quantified achievement 1',
      'Quantified achievement 2',
      'Quantified achievement 3'
    ],
    tech: ['Tech1', 'Tech2', 'Tech3'],
    category: 'Category Name'
  },
  // Add 5 more projects...
]
```

**Project Writing Tips:**
- Keep description under 20 words
- Quantify achievements with numbers
- Use action verbs (Built, Developed, Created)
- List 3-5 technologies maximum

#### 4. Update Experience

**File:** [app/components/sections/Experience.tsx](app/components/sections/Experience.tsx)

```tsx
// Line 6: Replace experiences array
const experiences = [
  {
    id: 1,
    role: 'Your Job Title',
    company: 'Company Name',
    period: 'Month Year - Month Year',
    location: 'City, State',
    description: 'One sentence about the role.',
    achievements: [
      'Quantified achievement with metric',
      'Another achievement with numbers',
      'Impact-focused accomplishment',
    ],
    tech: ['Tech1', 'Tech2', 'Tech3']
  },
  // Add more experiences...
]
```

#### 5. Update Skills

**File:** [app/components/sections/Skills.tsx](app/components/sections/Skills.tsx)

```tsx
// Line 6: Update skill categories
const skillCategories = [
  {
    category: 'Computer Science',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 90 },
      // Add your skills with honest levels (0-100)
    ]
  },
  // Update all 4 categories...
]
```

**Skill Level Guide:**
- 95-100: Expert, can teach others
- 85-94: Advanced, professional level
- 75-84: Intermediate, comfortable
- 60-74: Basic, learning
- Below 60: Beginner

#### 6. Update Contact Information

**File:** [app/components/sections/Opportunities.tsx](app/components/sections/Opportunities.tsx)

```tsx
// Line 153-173: Update contact links
<motion.a
  href="mailto:your.email@example.com"
  // ...
>
  Email Me
</motion.a>

<motion.a
  href="https://linkedin.com/in/yourprofile"
  // ...
>
  LinkedIn
</motion.a>

<motion.a
  href="https://github.com/yourusername"
  // ...
>
  GitHub
</motion.a>
```

#### 7. Update Metadata

**File:** [app/layout.tsx](app/layout.tsx)

```tsx
// Line 11-15
export const metadata: Metadata = {
  title: 'Your Name | Your Tagline',
  description: 'Your description for SEO',
  keywords: ['Your Name', 'Keyword1', 'Keyword2'],
}
```

---

## 🎨 Styling Customization

### Change Color Palette

**File:** [app/globals.css](app/globals.css)

```css
:root {
  --color-black: #000000;        /* Change to your brand color */
  --color-deep-charcoal: #111111;
  --color-soft-black: #1A1A1A;
  --color-light-grey: #EDEDED;
  --color-white: #FFFFFF;
}
```

**Also update:** [tailwind.config.ts](tailwind.config.ts)

```typescript
colors: {
  black: '#000000',
  'deep-charcoal': '#111111',
  'soft-black': '#1A1A1A',
  'light-grey': '#EDEDED',
  white: '#FFFFFF',
}
```

### Change Font

**File:** [app/layout.tsx](app/layout.tsx)

```tsx
// Replace Inter with your preferred Google Font
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
  display: 'swap',
})

// Update in JSX
<html lang="en" className={yourFont.variable}>
```

**Update:** [tailwind.config.ts](tailwind.config.ts)

```typescript
fontFamily: {
  sans: ['var(--font-your-font)', 'system-ui', 'sans-serif'],
}
```

---

## 🎬 Animation Customization

### Adjust Animation Speed

**File:** [app/lib/animations.ts](app/lib/animations.ts)

```typescript
// Make animations faster
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 } // Reduced from 0.8
}
```

### Change Easing Curves

```typescript
// Custom easing
export const customEasing = {
  smooth: [0.22, 1, 0.36, 1],     // Smooth (default)
  quick: [0.4, 0, 0.2, 1],        // Faster
  bounce: [0.68, -0.55, 0.265, 1.55], // Playful
}
```

### Disable Animations

Add to [app/globals.css](app/globals.css):

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 Adding New Sections

### Example: Adding Certifications Section

**1. Create Component**

Create [app/components/sections/Certifications.tsx](app/components/sections/Certifications.tsx):

```tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const certifications = [
  {
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
  },
  // Add more...
]

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="border border-deep-charcoal/10 p-6"
            >
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-deep-charcoal/70">{cert.issuer}</p>
              <p className="text-sm text-deep-charcoal/60">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
```

**2. Add to Main Page**

**File:** [app/page.tsx](app/page.tsx)

```tsx
import Certifications from './components/sections/Certifications'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications /> {/* Add here */}
      <Opportunities />
    </main>
  )
}
```

---

## 🖼️ Adding Images

### Project Images

**1. Add images to public folder**

```
public/
  projects/
    project1.jpg
    project2.jpg
```

**2. Update project cards**

```tsx
import Image from 'next/image'

<div className="aspect-video relative mb-4">
  <Image
    src="/projects/project1.jpg"
    alt="Project name"
    fill
    className="object-cover"
  />
</div>
```

### Profile Image (About Section)

```tsx
<div className="relative w-48 h-48 mx-auto mb-6">
  <Image
    src="/profile.jpg"
    alt="Your name"
    fill
    className="object-cover rounded-full"
  />
</div>
```

---

## 🔧 Advanced Customization

### Add Navigation Bar

Create [app/components/ui/Navigation.tsx](app/components/ui/Navigation.tsx):

```tsx
'use client'

import { motion } from 'framer-motion'
import { useScrollPosition } from '@/app/lib/hooks'

const Navigation = () => {
  const scrollPosition = useScrollPosition()
  const isScrolled = scrollPosition > 100

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white border-b border-deep-charcoal/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold">Your Name</div>
        <div className="flex gap-8">
          <a href="#about" className="hover:text-deep-charcoal">About</a>
          <a href="#projects" className="hover:text-deep-charcoal">Projects</a>
          <a href="#contact" className="hover:text-deep-charcoal">Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
```

Add to [app/layout.tsx](app/layout.tsx):

```tsx
import Navigation from './components/ui/Navigation'

<body>
  <Navigation />
  {children}
  <ThemeSwitcher />
</body>
```

### Add Footer

Create [app/components/ui/Footer.tsx](app/components/ui/Footer.tsx):

```tsx
const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4">© 2025 Your Name. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:email@example.com">Email</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://github.com">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**1. Install Vercel CLI**
```bash
npm i -g vercel
```

**2. Login**
```bash
vercel login
```

**3. Deploy**
```bash
vercel
```

**4. Set up custom domain (optional)**
- Go to Vercel dashboard
- Project Settings → Domains
- Add your custom domain

### Deploy to Netlify

**1. Create `netlify.toml`**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**2. Connect Git Repository**
- Push to GitHub
- Connect to Netlify
- Auto-deploys on push

### Deploy to Other Platforms

**Requirements:**
- Node.js 18+
- Build command: `npm run build`
- Start command: `npm start`
- Output directory: `.next`

---

## 🐛 Troubleshooting

### Build Errors

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run build
# Fix reported errors one by one
```

### Animation Issues

**Animations not smooth**
- Check if animating width/height (use transform instead)
- Reduce number of simultaneous animations
- Use `will-change` sparingly

**Animations not triggering**
- Check `useInView` margins
- Verify Framer Motion is installed
- Check browser console for errors

### Styling Issues

**Tailwind classes not working**
```bash
# Rebuild Tailwind
npm run dev
# Clear cache
rm -rf .next
```

**Custom fonts not loading**
- Check font import in layout.tsx
- Verify font name matches Google Fonts
- Check network tab for font loading

---

## 📊 Performance Optimization

### Check Performance

```bash
npm run build
# Check bundle size in output
```

### Optimize Images

```bash
npm install sharp
# Next.js will auto-optimize images
```

### Reduce Bundle Size

```typescript
// Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### Enable Caching

```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
}
```

---

## ✅ Pre-Launch Checklist

### Content
- [ ] Personal info updated in all sections
- [ ] No placeholder text remains
- [ ] All links work and go to correct destinations
- [ ] Grammar and spelling checked
- [ ] Contact information correct

### Design
- [ ] Consistent spacing throughout
- [ ] All images optimized
- [ ] Animations smooth on test devices
- [ ] Theme switcher works
- [ ] Responsive on mobile/tablet/desktop

### Technical
- [ ] No console errors
- [ ] Build completes successfully
- [ ] Lighthouse score 90+ (Performance, Accessibility, SEO)
- [ ] Meta tags set correctly
- [ ] Favicon added

### Testing
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on iOS and Android
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Test slow 3G connection

---

## 📞 Getting Help

**Common Issues:**
- Check this guide first
- Read error messages carefully
- Check browser console
- Search Next.js docs

**Still Stuck?**
- Open GitHub issue
- Ask on Stack Overflow
- Check Next.js Discord

---

**Last Updated:** December 2025
