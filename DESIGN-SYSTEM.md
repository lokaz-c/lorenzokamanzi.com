# 🎨 Design System Documentation

Complete design system for Lorenzo Kamanzi's portfolio website.

---

## 🎯 Design Principles

1. **Minimalism First** - Remove everything unnecessary
2. **Smooth Motion** - All animations feel natural and elegant
3. **Neutral Palette** - Timeless black, white, grey
4. **Professional Playfulness** - Serious but not boring
5. **Data-Driven** - Quantified results and metrics

---

## 🎨 Color System

### Primary Palette

| Name | Hex | Usage |
|------|-----|-------|
| Black | `#000000` | Primary text, accents, buttons |
| Deep Charcoal | `#111111` | Secondary text, hover states |
| Soft Black | `#1A1A1A` | Tertiary text, subtle elements |
| Light Grey | `#EDEDED` | Backgrounds, dividers |
| White | `#FFFFFF` | Primary background, card surfaces |

### Semantic Colors

```css
/* Text Hierarchy */
--text-primary: #000000       /* Headings, important text */
--text-secondary: #111111     /* Body text */
--text-tertiary: #1A1A1A      /* Captions, labels */
--text-muted: rgba(0,0,0,0.6) /* Disabled, placeholder */

/* Backgrounds */
--bg-primary: #FFFFFF         /* Main background */
--bg-secondary: #EDEDED       /* Alternate sections */
--bg-tertiary: #F8F8F8        /* Cards, containers */

/* Borders */
--border-light: rgba(0,0,0,0.08)   /* Subtle dividers */
--border-medium: rgba(0,0,0,0.15)  /* Standard borders */
--border-heavy: rgba(0,0,0,0.25)   /* Emphasis borders */
```

### Opacity Scale

```css
100% - Primary elements
80%  - Secondary text
60%  - Tertiary text
40%  - Disabled states
20%  - Subtle backgrounds
10%  - Hover overlays
5%   - Ultra-subtle accents
```

---

## 📝 Typography

### Font Family

**Primary:** Inter
- Clean, modern, tech-friendly
- Excellent legibility at all sizes
- Variable font support

**Fallbacks:** `system-ui, -apple-system, sans-serif`

### Type Scale

```css
/* Display (Hero) */
--text-9xl: 128px / 1.1   /* Extra large displays */
--text-8xl: 96px / 1.1    /* Large hero headings */
--text-7xl: 72px / 1.1    /* Hero headings */

/* Headings */
--text-6xl: 60px / 1.1    /* Section titles */
--text-5xl: 48px / 1.1    /* Page titles */
--text-4xl: 36px / 1.2    /* H2 */
--text-3xl: 30px / 1.2    /* H3 */
--text-2xl: 24px / 1.3    /* H4 */
--text-xl: 20px / 1.4     /* H5 */
--text-lg: 18px / 1.5     /* Large body */

/* Body */
--text-base: 16px / 1.6   /* Body text */
--text-sm: 14px / 1.6     /* Small text */
--text-xs: 12px / 1.5     /* Captions */
```

### Font Weights

```css
--font-light: 300      /* Subtle emphasis */
--font-normal: 400     /* Body text (default) */
--font-medium: 500     /* UI elements, labels */
--font-semibold: 600   /* Strong emphasis */
--font-bold: 700       /* Headings */
--font-extrabold: 800  /* Extra strong headings */
```

### Letter Spacing

```css
/* Headings (Tight) */
h1, h2, h3: -0.03em
h4, h5: -0.02em

/* Body (Normal) */
p, div: 0em

/* UI Elements (Wide) */
.uppercase-label: 0.08em - 0.15em
.button: 0.08em
```

### Typography Usage

```tsx
// Page Title
<h1 className="text-6xl font-bold tracking-tight">Title</h1>

// Section Title
<h2 className="text-5xl font-bold tracking-tight">Section</h2>

// Card Title
<h3 className="text-2xl font-bold">Card Title</h3>

// Body Text
<p className="text-base text-deep-charcoal/80">Body text</p>

// Label
<span className="text-xs uppercase tracking-widest font-medium">Label</span>
```

---

## 📏 Spacing System

### Scale (8px base unit)

```css
0: 0px
1: 4px    (0.25rem)
2: 8px    (0.5rem)
3: 12px   (0.75rem)
4: 16px   (1rem)
6: 24px   (1.5rem)
8: 32px   (2rem)
12: 48px  (3rem)
16: 64px  (4rem)
20: 80px  (5rem)
24: 96px  (6rem)
32: 128px (8rem)
```

### Component Spacing

```css
/* Cards */
Padding: 32px (2rem)
Gap between: 24px (1.5rem)

/* Sections */
Padding Y: 128px (8rem) desktop, 64px (4rem) mobile
Margin between: 0 (use alternating backgrounds)

/* Content */
Paragraph spacing: 16px (1rem)
Heading margin-bottom: 24px (1.5rem)
List item spacing: 12px (0.75rem)
```

---

## 🎭 Component Library

### Buttons

**Primary Button**
```tsx
<button className="px-8 py-4 bg-black text-white uppercase text-sm tracking-wide font-medium hover:bg-deep-charcoal transition-colors">
  Button Text
</button>
```

**Secondary Button**
```tsx
<button className="px-8 py-4 border border-black text-black uppercase text-sm tracking-wide font-medium hover:bg-black hover:text-white transition-all">
  Button Text
</button>
```

### Cards

**Project Card**
```tsx
<div className="border border-deep-charcoal/10 bg-light-grey p-8 hover:translate-y-[-8px] transition-transform duration-400">
  {/* Content */}
</div>
```

**Experience Card**
```tsx
<div className="bg-white border border-deep-charcoal/10 p-8">
  {/* Content */}
</div>
```

### Tags

**Tech Stack Tag**
```tsx
<span className="text-xs px-3 py-1 bg-white border border-deep-charcoal/20 text-deep-charcoal font-medium">
  Python
</span>
```

**Category Tag**
```tsx
<span className="text-xs uppercase tracking-wider text-deep-charcoal/60 font-medium">
  Trading System
</span>
```

---

## 🎬 Animation Guidelines

### Timing

```css
/* Quick interactions */
--duration-fast: 200ms - 300ms
/* Standard transitions */
--duration-normal: 400ms - 600ms
/* Entrance animations */
--duration-slow: 800ms - 1000ms
```

### Easing Curves

```css
/* Smooth (Default) */
cubic-bezier(0.22, 1, 0.36, 1)
Use for: Most transitions

/* Snap */
cubic-bezier(0.87, 0, 0.13, 1)
Use for: Quick UI feedback

/* Bounce (Playful theme only) */
cubic-bezier(0.68, -0.55, 0.265, 1.55)
Use for: Playful interactions

/* Spring (Framer Motion) */
{ type: 'spring', stiffness: 300, damping: 20 }
Use for: Hover effects, micro-interactions
```

### Animation Patterns

**Fade In Up**
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Scale In**
```tsx
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
```

**Stagger Children**
```tsx
<motion.div variants={staggerContainer}>
  {items.map(item => (
    <motion.div variants={staggerItem} />
  ))}
</motion.div>
```

**Hover Lift**
```tsx
whileHover={{ y: -8 }}
transition={{ type: 'spring', stiffness: 300, damping: 25 }}
```

### Animation Rules

1. **Never animate width/height** - Use transform scale
2. **Use GPU-accelerated properties** - transform, opacity
3. **Add delays for sequences** - 0.1s - 0.2s between items
4. **Keep durations under 1s** - Respect user time
5. **Use ease-out for entrances** - Natural deceleration
6. **Provide hover feedback** - All interactive elements
7. **Reduce motion for accessibility** - Respect prefers-reduced-motion

---

## 📐 Layout System

### Grid

```css
/* Container */
max-width: 1400px (7xl)
padding: 24px mobile, 48px desktop

/* Two Column */
grid-cols-1 md:grid-cols-2
gap: 64px (16)

/* Three Column */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap: 24px (6)
```

### Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Section Structure

```tsx
<section className="py-32 px-6 md:px-12 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section label */}
    <span className="text-xs uppercase tracking-widest">Label</span>

    {/* Section title */}
    <h2 className="text-5xl font-bold mb-20">Title</h2>

    {/* Content */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>
```

---

## 🎨 Theme Variations

### 1. Corporate Neutral

**Philosophy:** Ultra-professional, conservative, traditional

```css
Font Weight: Heavier (700)
Letter Spacing: Tighter (0.02em)
Hover Lift: Subtle (4px)
Transition Duration: Quick (300ms)
Border Width: 1px
Animation Style: Linear, predictable
```

**Best For:**
- Finance positions
- Corporate internships
- Conservative industries

### 2. Tech Founder Polished (Default)

**Philosophy:** Modern, sophisticated, balanced

```css
Font Weight: Bold (700)
Letter Spacing: Tight (-0.03em)
Hover Lift: Medium (8px)
Transition Duration: Smooth (400ms)
Border Width: 1px
Animation Style: Smooth bezier curves
```

**Best For:**
- Tech companies
- Startups
- Modern enterprises

### 3. Playful Minimalist

**Philosophy:** Creative, friendly, expressive

```css
Font Weight: Extra Bold (800)
Letter Spacing: Extra Tight (-0.04em)
Hover Lift: Dramatic (12px + rotation)
Transition Duration: Bouncy (500ms)
Border Width: 2px
Animation Style: Bounce, overshoot
```

**Best For:**
- Creative roles
- Portfolio showcases
- Casual contexts

---

## 🎯 Interaction Patterns

### Hover States

**Cards**
```css
Default: border-color opacity 10%
Hover: border-color opacity 15-25%, translateY(-8px)
```

**Buttons**
```css
Default: bg-black
Hover: bg-deep-charcoal, scale(1.02)
Active: scale(0.98)
```

**Links**
```css
Default: underline-offset-4
Hover: underline, slight color shift
```

### Focus States

```css
outline: 2px solid black
outline-offset: 2px
```

### Loading States

```css
Skeleton: bg-light-grey animate-pulse
Spinner: border-black border-t-transparent rotate
```

---

## ♿ Accessibility

### Requirements

1. **Semantic HTML** - Use proper heading hierarchy
2. **Alt Text** - All images must have descriptive alt
3. **Keyboard Navigation** - All interactive elements accessible
4. **Focus Indicators** - Visible focus states
5. **Color Contrast** - WCAG AA minimum (4.5:1)
6. **Reduced Motion** - Respect prefers-reduced-motion

### Implementation

```tsx
// Reduced motion
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 Responsive Design

### Mobile First Approach

```tsx
// Base (Mobile)
className="text-4xl px-6"

// Tablet and up
className="text-4xl md:text-5xl px-6 md:px-12"

// Desktop
className="text-4xl md:text-5xl lg:text-6xl px-6 md:px-12"
```

### Responsive Patterns

**Stack on Mobile, Grid on Desktop**
```tsx
className="grid grid-cols-1 md:grid-cols-2 gap-6"
```

**Hide on Mobile**
```tsx
className="hidden md:block"
```

**Different Spacing**
```tsx
className="py-16 md:py-32"
```

---

## 🚀 Performance Guidelines

### Image Optimization
- Use WebP format
- Lazy load below fold
- Responsive images with srcset

### Animation Performance
- Only animate transform and opacity
- Use will-change sparingly
- Remove animations on low-end devices

### Code Splitting
- Dynamic imports for heavy components
- Lazy load sections below fold

---

## ✅ Design Checklist

Before Launch:

**Visual Design**
- [ ] Consistent spacing throughout
- [ ] Typography hierarchy clear
- [ ] Color contrast meets WCAG AA
- [ ] All interactive states defined

**Animations**
- [ ] Smooth on 60fps devices
- [ ] No jank or stuttering
- [ ] Reduced motion supported
- [ ] Loading states implemented

**Responsive**
- [ ] Works on 320px width
- [ ] Tablet layout optimized
- [ ] Desktop layout polished
- [ ] Touch targets 44px minimum

**Accessibility**
- [ ] Semantic HTML structure
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Focus indicators visible

**Content**
- [ ] No Lorem Ipsum
- [ ] Grammar checked
- [ ] Links work
- [ ] Images optimized

---

## 🎓 Resources

**Design Inspiration:**
- Apple.com - Clean, minimal, sophisticated
- Stripe.com - Elegant motion, clear hierarchy
- Vercel.com - Modern, technical, polished
- Linear.app - Smooth animations, great UX

**Motion Design:**
- Framer Motion docs
- Material Design motion principles
- Apple Human Interface Guidelines

**Typography:**
- Practical Typography by Butterick
- Type Scale calculator
- Modular Scale

---

**Last Updated:** December 2025
**Version:** 1.0
**Maintainer:** Lorenzo Kamanzi
