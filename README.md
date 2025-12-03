# Lorenzo Kamanzi - Portfolio Website

A modern, minimal, and highly interactive portfolio website showcasing the intersection of Computer Science and Finance.

## 🎨 Design Philosophy

**Brand Identity:** Clean, modern, high-end aesthetic with neutral color palette
**Motion Design:** Smooth animations and micro-interactions throughout
**Tone:** Professional yet playful, corporate yet approachable
**Inspiration:** Apple × Stripe × TradingView × modern developer portfolios

---

## 🎯 Key Features

### ✨ **Fully Animated Experience**
- Scroll-triggered animations using Framer Motion
- Hover micro-interactions on all interactive elements
- Smooth page transitions with custom easing curves
- Parallax effects and mouse-tracking interactions

### 🎭 **Three Style Variations**
1. **Corporate Neutral** - Goldman × McKinsey vibe (ultra-professional)
2. **Tech Founder Polished** - Apple × Vercel vibe (modern, default)
3. **Playful Minimalist** - Framer × indie portfolio vibe (creative)

Switch between themes using the bottom-right theme selector.

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly interactions

---

## 🎨 Color Palette

```
Primary Colors:
#000000 - Black (anchor)
#111111 - Deep Charcoal
#1A1A1A - Soft Black
#EDEDED - Light Grey
#FFFFFF - White
```

**Typography:** Inter (primary system font)

---

## 📐 Site Structure

### 1. **Hero Section**
- Animated headline with name and tagline
- Subtitle blending CS + Finance identity
- CTA buttons (Resume + Contact)
- Subtle mouse-tracking grid background
- Scroll indicator animation

### 2. **About Me**
- Professional bio text (2-column on desktop)
- "Quick Facts" interactive card grid
- Hover animations with emoji reactions
- Clean typography hierarchy

### 3. **Projects** (6 Featured)
Each project card includes:
- Category tag
- Title and description
- 3 impact bullets (quantified results)
- Tech stack tags
- Hover lift animation with accent line

**Featured Projects:**
1. Algorithmic Trading Bot
2. Market Analytics Dashboard
3. Predictive Options Pricing Model
4. Portfolio Optimization Engine
5. Sentiment Analysis Pipeline
6. Automated Financial Reporter

### 4. **Experience**
- Animated timeline layout
- Professional positions with quantified achievements
- Tech stack badges per role
- Hover effects on timeline dots
- Responsive mobile stacking

### 5. **Skills**
Four categories with animated progress bars:
- Computer Science
- Finance
- Tools & Technologies
- Soft Skills

Includes summary stats grid at bottom.

### 6. **Opportunities**
Six role-specific micro-pitches:
- Software Engineer
- Data Analyst
- Quant Researcher
- Finance Analyst
- Product/Strategy
- Technical Internships

Each with value props and hover animations.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio-site/
├── app/
│   ├── components/
│   │   ├── sections/       # Main page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Opportunities.tsx
│   │   └── ui/             # Reusable UI components
│   │       └── ThemeSwitcher.tsx
│   ├── lib/
│   │   ├── animations.ts   # Animation variants
│   │   └── hooks.ts        # Custom React hooks
│   ├── styles/
│   │   └── themes.css      # Three style variations
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── package.json
```

---

## 🎬 Animation System

### Built with Framer Motion

**Core Animation Patterns:**
- `fadeInUp` - Opacity + upward slide
- `fadeIn` - Simple opacity transition
- `scaleIn` - Scale + opacity
- `slideInLeft/Right` - Horizontal entrance
- `staggerContainer` - Sequential child animations

**Custom Easing Curves:**
```typescript
smooth: [0.22, 1, 0.36, 1]     // Default smooth
bounce: [0.68, -0.55, 0.265, 1.55]  // Playful bounce
snap: [0.87, 0, 0.13, 1]       // Quick snap
```

**Usage Example:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  Content
</motion.div>
```

---

## 🎨 Style Variations Guide

### 1. Corporate Neutral
**When to use:** Conservative industries, formal contexts
**Characteristics:**
- Heavier font weights (700)
- Tighter letter spacing
- Subtle hover effects (4px lift)
- Traditional transitions (0.3s)

### 2. Tech Founder Polished (Default)
**When to use:** Tech startups, modern companies
**Characteristics:**
- Balanced font weights (700)
- Tight tracking (-0.03em)
- Medium hover effects (8px lift)
- Smooth transitions (0.4s)

### 3. Playful Minimalist
**When to use:** Creative roles, portfolio showcases
**Characteristics:**
- Bold font weights (800)
- Extra-tight tracking (-0.04em)
- Dramatic hover effects (12px lift + rotation)
- Bouncy transitions (0.5s with bounce easing)

---

## 🛠️ Customization Guide

### Update Personal Information

**1. Hero Section:** Edit [app/components/sections/Hero.tsx](app/components/sections/Hero.tsx:12)
```tsx
<h1>Your Name</h1>
<p>Your tagline</p>
```

**2. About Section:** Edit [app/components/sections/About.tsx](app/components/sections/About.tsx:35)
- Update bio text
- Modify fun facts array

**3. Projects:** Edit [app/components/sections/Projects.tsx](app/components/sections/Projects.tsx:6)
- Modify `projects` array with your projects

**4. Experience:** Edit [app/components/sections/Experience.tsx](app/components/sections/Experience.tsx:6)
- Update `experiences` array

**5. Skills:** Edit [app/components/sections/Skills.tsx](app/components/sections/Skills.tsx:6)
- Modify skill categories and levels

**6. Contact Links:** Edit [app/components/sections/Opportunities.tsx](app/components/sections/Opportunities.tsx:153)
- Update email, LinkedIn, GitHub URLs

### Color Customization

Edit [tailwind.config.ts](tailwind.config.ts:12) and [app/globals.css](app/globals.css:6)

```css
:root {
  --color-black: #000000;
  --color-deep-charcoal: #111111;
  --color-soft-black: #1A1A1A;
  --color-light-grey: #EDEDED;
  --color-white: #FFFFFF;
}
```

### Typography Changes

Update font in [app/layout.tsx](app/layout.tsx:5):
```tsx
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
})
```

---

## 🎯 Performance Optimization

- **Code Splitting:** Automatic with Next.js App Router
- **Image Optimization:** Use Next.js `<Image>` component
- **Font Loading:** Variable fonts with `display: swap`
- **Animation Performance:** CSS transforms (GPU-accelerated)
- **Bundle Size:** Tree-shaking enabled

### Performance Checklist
- [ ] Optimize images (WebP format)
- [ ] Lazy load below-the-fold content
- [ ] Minimize bundle size
- [ ] Enable caching headers
- [ ] Use CDN for static assets

---

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Other Platforms
Any platform supporting Next.js (AWS Amplify, Railway, Render, etc.)

---

## 📝 Content Guidelines

### Writing Style
- **Concise:** Keep descriptions under 2 sentences
- **Quantified:** Use numbers and metrics
- **Active Voice:** "Built" not "Was built"
- **Impact-Focused:** Highlight outcomes, not just features

### Project Descriptions
**Template:**
```
[Action Verb] + [What] + [Impact/Result]

Example: "Built algorithmic trading system with 23% annualized return"
```

### Technical Writing
- Use bullet points for achievements
- Include specific tech stack
- Quantify results whenever possible
- Highlight unique contributions

---

## 🎓 Technologies Used

**Frontend:**
- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

**Development:**
- ESLint
- PostCSS
- Autoprefixer

---

## 📄 License

Personal portfolio project - feel free to use as inspiration or template for your own portfolio.

---

## 🤝 Contact

**Lorenzo Kamanzi**
📧 Email: lorenzo@example.com
💼 LinkedIn: [linkedin.com/in/lorenzokamanzi](https://linkedin.com/in/lorenzokamanzi)
🐙 GitHub: [github.com/lorenzokamanzi](https://github.com/lorenzokamanzi)

---

## 🎉 Credits

Design & Development: Lorenzo Kamanzi
Inspiration: Apple, Stripe, Vercel, Framer
Built with Next.js, React, and Framer Motion
