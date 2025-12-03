# 📐 Portfolio Website Wireframe

Complete page structure from top to bottom.

---

## 🎯 Page Layout Overview

```
┌─────────────────────────────────────────────┐
│         [Optional Navigation Bar]           │
└─────────────────────────────────────────────┘
│                                             │
│            🏠 HERO SECTION                  │
│         (Full viewport height)              │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│            📖 ABOUT ME                      │
│         (Alternating background)            │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│            💼 PROJECTS                      │
│          (6 project cards)                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│            💻 EXPERIENCE                    │
│       (Timeline with 4 roles)               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│            🎓 SKILLS                        │
│        (4 categories + stats)               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│           🚀 OPPORTUNITIES                  │
│         (6 role pitches + CTA)              │
│                                             │
├─────────────────────────────────────────────┤
│         [Optional Footer Section]           │
└─────────────────────────────────────────────┘

                                      ┌──────────────┐
                                      │    Theme     │
                                      │   Switcher   │
                                      └──────────────┘
                                   (Fixed bottom-right)
```

---

## 📱 Detailed Section Breakdowns

### 1. HERO SECTION

```
┌───────────────────────────────────────────────────────┐
│                                                       │
│                  [Animated Grid BG]                   │
│                                                       │
│                                                       │
│                   Lorenzo Kamanzi                     │
│                  (96px, Bold, Black)                  │
│                                                       │
│              Computer Science × Finance               │
│                  (30px, Light, Grey)                  │
│                                                       │
│          Building intelligent systems at the          │
│       intersection of technology and markets.         │
│                   Class of 2028.                      │
│                  (20px, Regular)                      │
│                                                       │
│        ┌──────────────┐  ┌──────────────┐            │
│        │ Get in Touch │  │ View Resume  │            │
│        └──────────────┘  └──────────────┘            │
│                                                       │
│                       ↓                               │
│                  (Scroll hint)                        │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Key Elements:**
- Full viewport height (100vh)
- Centered content
- Animated background grid (subtle, mouse-tracking)
- Name: 96px, ultra-bold
- Two CTA buttons (primary + secondary)
- Animated scroll indicator at bottom

**Spacing:**
- Container: max-width 1200px, centered
- Vertical: auto-centered with flexbox
- Button gap: 16px
- Section padding: 24px mobile, 48px desktop

---

### 2. ABOUT ME SECTION

```
┌───────────────────────────────────────────────────────┐
│  ABOUT ME (12px, uppercase, grey)                     │
│                                                       │
│  ┌────────────────────┐  ┌────────────────────┐      │
│  │                    │  │   Quick Facts      │      │
│  │  Bridging Code &   │  │                    │      │
│  │     Capital        │  │  ┌──────┐┌──────┐ │      │
│  │   (48px, Bold)     │  │  │ 📊   ││ 💻   │ │      │
│  │                    │  │  │ Fact ││ Fact │ │      │
│  │  I'm a double      │  │  └──────┘└──────┘ │      │
│  │  major in CS and   │  │                    │      │
│  │  Finance at...     │  │  ┌──────┐┌──────┐ │      │
│  │                    │  │  │ 🎯   ││ ⚡   │ │      │
│  │  [3 paragraphs]    │  │  │ Fact ││ Fact │ │      │
│  │                    │  │  └──────┘└──────┘ │      │
│  │                    │  │                    │      │
│  └────────────────────┘  └────────────────────┘      │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Layout:**
- Background: Light grey (#EDEDED)
- 2-column grid (desktop), stacked (mobile)
- Section label: 12px uppercase, 0.15em tracking
- Section title: 48px bold
- Paragraph text: 18px, 1.6 line height
- Fun facts: 2×2 grid, interactive cards

**Spacing:**
- Section padding: 128px top/bottom (desktop), 64px (mobile)
- Grid gap: 64px
- Card gap: 16px
- Paragraph margin: 16px

**Interactions:**
- Bio text: Fade in up on scroll
- Cards: Scale in with stagger, hover lift + emoji scale

---

### 3. PROJECTS SECTION

```
┌───────────────────────────────────────────────────────┐
│  SELECTED PROJECTS (12px, uppercase, grey)            │
│                                                       │
│  Building Systems,                                    │
│  Creating Value                                       │
│  (60px, Bold)                                         │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ Trading System   │  │ Data Viz    →   │          │
│  │ ─────────────────│  │                  │          │
│  │                  │  │ Market Analytics │          │
│  │ Algorithmic      │  │ Dashboard        │          │
│  │ Trading Bot      │  │                  │          │
│  │                  │  │ Real-time data...│          │
│  │ Multi-strategy...│  │                  │          │
│  │                  │  │ • Achievement 1  │          │
│  │ • Backtested...  │  │ • Achievement 2  │          │
│  │ • Real-time...   │  │ • Achievement 3  │          │
│  │ • Integrated...  │  │                  │          │
│  │                  │  │ [Python][React]  │          │
│  │ [Python][ML][DB] │  │ [TypeScript][D3] │          │
│  └──────────────────┘  └──────────────────┘          │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ [Project 3]      │  │ [Project 4]      │          │
│  └──────────────────┘  └──────────────────┘          │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ [Project 5]      │  │ [Project 6]      │          │
│  └──────────────────┘  └──────────────────┘          │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Layout:**
- Background: White
- 2-column grid, 3 rows
- Each card: Border, light grey background
- Hover: Lift effect, top accent line appears

**Card Structure:**
1. Category tag (top-left) + Arrow icon (top-right)
2. Project title (24px bold)
3. Description (16px)
4. 3 bullet points (14px)
5. Tech stack tags (12px)

**Spacing:**
- Card padding: 32px
- Card gap: 32px
- Element spacing: 16-24px
- Bullet indent: 12px

**Animations:**
- Cards: Stagger fade in up
- Hover: Lift 8px, arrow rotates 45°
- Accent line: Scale from 0 to 100% width

---

### 4. EXPERIENCE SECTION

```
┌───────────────────────────────────────────────────────┐
│  EXPERIENCE (12px, uppercase, grey)                   │
│                                                       │
│  Professional Journey                                 │
│  (60px, Bold)                                         │
│                                                       │
│  │                                                    │
│  ●────────────────────────────────────────────────┐   │
│  │  Software Engineering Intern     Summer 2026  │   │
│  │  [Tech Company]              San Francisco, CA│   │
│  │                                               │   │
│  │  Developed scalable backend systems...        │   │
│  │                                               │   │
│  │  • Reduced API response time by 40%          │   │
│  │  • Built microservices...                    │   │
│  │  • Collaborated with...                      │   │
│  │                                               │   │
│  │  [Python] [PostgreSQL] [Docker] [AWS]        │   │
│  └───────────────────────────────────────────────┘   │
│  │                                                    │
│  ●────────────────────────────────────────────────┐   │
│  │  Research Assistant        2025 - Present    │   │
│  │  [University Lab]                   Campus   │   │
│  │  [Content similar to above]                  │   │
│  └───────────────────────────────────────────────┘   │
│  │                                                    │
│  ●─── [Experience 3]                                  │
│  │                                                    │
│  ●─── [Experience 4]                                  │
│  │                                                    │
└───────────────────────────────────────────────────────┘
```

**Layout:**
- Background: Light grey
- Vertical timeline (left border on desktop)
- Cards with white background
- Timeline dots at each position

**Card Structure:**
1. Role + Period (split layout)
2. Company + Location
3. Description paragraph
4. 3 achievement bullets
5. Tech stack tags

**Timeline:**
- Vertical line: 2px, grey, left side
- Dots: 12px circle, positioned on line
- Dot animation: Scale in, expands on hover

**Spacing:**
- Card spacing: 64px vertical
- Card padding: 32px
- Left offset from timeline: 48px (desktop)

---

### 5. SKILLS SECTION

```
┌───────────────────────────────────────────────────────┐
│  SKILLS & EXPERTISE (12px, uppercase, grey)           │
│                                                       │
│  Technical Arsenal                                    │
│  (60px, Bold)                                         │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ Computer Science │  │ Finance          │          │
│  │ ──────────────── │  │ ──────────────── │          │
│  │                  │  │                  │          │
│  │ Python      95%  │  │ Fin Model   92%  │          │
│  │ ███████████████  │  │ ██████████████   │          │
│  │                  │  │                  │          │
│  │ JavaScript  90%  │  │ Quant Anl   90%  │          │
│  │ █████████████▒▒  │  │ █████████████▒▒  │          │
│  │                  │  │                  │          │
│  │ [4 more skills]  │  │ [4 more skills]  │          │
│  │                  │  │                  │          │
│  └──────────────────┘  └──────────────────┘          │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ Tools & Tech     │  │ Soft Skills      │          │
│  │ [6 skills]       │  │ [6 skills]       │          │
│  └──────────────────┘  └──────────────────┘          │
│                                                       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                │
│  │ 8+   │ │ 15+  │ │ 25+  │ │ 5+   │                │
│  │ Lang │ │ Frame│ │ Proj │ │ Cert │                │
│  └──────┘ └──────┘ └──────┘ └──────┘                │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Layout:**
- Background: White
- 2×2 grid for skill categories
- Each category: 6 skills with progress bars
- Stats section: 4 cards in row

**Progress Bars:**
- Container: Light grey background
- Fill: Black, animates from 0 to level%
- Height: 6px
- Hover: Slight color shift

**Stats Cards:**
- Border, centered text
- Large number (48px bold)
- Label below (12px uppercase)
- Hover: Lift 4px

**Animations:**
- Bars animate in sequence with stagger
- Stats count up on scroll into view
- Hover effects on all interactive elements

---

### 6. OPPORTUNITIES SECTION

```
┌───────────────────────────────────────────────────────┐
│  WHAT I CAN DO FOR YOU (12px, uppercase, grey)        │
│                                                       │
│  Ready to Create Impact                               │
│  (60px, Bold)                                         │
│                                                       │
│  Whether you're looking for technical depth,          │
│  analytical rigor, or hybrid expertise...             │
│                                                       │
│  ┌────────┐ ┌────────┐ ┌────────┐                    │
│  │ 💻     │ │ 📊     │ │ 📈     │                    │
│  │        │ │        │ │        │                    │
│  │Software│ │  Data  │ │ Quant  │                    │
│  │Engineer│ │Analyst │ │Research│                    │
│  │        │ │        │ │        │                    │
│  │Ship... │ │Trans...│ │Develop │                    │
│  │        │ │        │ │        │                    │
│  │• Full  │ │• SQL   │ │• Stats │                    │
│  │• System│ │• Viz   │ │• Model │                    │
│  │• Strong│ │• Bus   │ │• Python│                    │
│  │• Collab│ │• Comm  │ │• Impl  │                    │
│  └────────┘ └────────┘ └────────┘                    │
│                                                       │
│  ┌────────┐ ┌────────┐ ┌────────┐                    │
│  │ [Role4]│ │ [Role5]│ │ [Role6]│                    │
│  └────────┘ └────────┘ └────────┘                    │
│                                                       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                       │
│  Let's Build Something Great                          │
│  (36px, Bold)                                         │
│                                                       │
│  Open to opportunities, internships, and              │
│  project collaborations.                              │
│                                                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│  │ Email Me │ │ LinkedIn │ │  GitHub  │              │
│  └──────────┘ └──────────┘ └──────────┘              │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Layout:**
- Background: Light grey
- 3×2 grid for role cards
- CTA section below with centered content

**Role Cards:**
- Large emoji icon (48px)
- Role title (24px bold)
- Pitch sentence (16px)
- 4 value prop bullets (14px)
- Hover: Lift + bottom accent line

**CTA Section:**
- Divider line above
- Heading + description
- 3 buttons in row

**Spacing:**
- Card padding: 32px
- Card gap: 24px
- CTA margin-top: 80px

---

## 📱 Mobile Adaptations

### General Mobile Changes
- Grids → Stack vertically
- Font sizes reduce 20-30%
- Padding: 24px (vs 48px desktop)
- Section padding: 64px (vs 128px desktop)

### Specific Breakpoints

**Hero Section (Mobile)**
```
- Name: 48px (vs 96px)
- Tagline: 20px (vs 30px)
- Buttons: Stack vertically
- Full width buttons
```

**Projects (Mobile)**
```
- 1 column (vs 2 columns)
- Cards maintain full width
- All other styling identical
```

**Timeline (Mobile)**
```
- Remove left border
- Remove dots
- Cards stack naturally
- Full width cards
```

---

## 🎨 Theme Variations (Visual Differences)

### Corporate Neutral
- Borders: 1px, subtle
- Hover lift: 4px
- Font weight: 700 (standard bold)
- Transitions: 0.3s
- Professional, conservative

### Tech Founder (Default)
- Borders: 1px, clean
- Hover lift: 8px
- Font weight: 700 (bold)
- Transitions: 0.4s
- Modern, balanced

### Playful Minimalist
- Borders: 2px, bold
- Hover lift: 12px + rotation
- Font weight: 800 (extra bold)
- Transitions: 0.5s with bounce
- Creative, expressive

---

## 🔲 Component Dimensions

### Buttons
- Height: 56px
- Padding: 16px 32px
- Min-width: 160px
- Border: 1-2px (theme dependent)

### Cards
- Padding: 32px
- Min-height: 300px (projects)
- Border-radius: 0 (sharp corners)

### Progress Bars
- Height: 6px
- Border-radius: 0
- Animation duration: 1s

### Icons
- Emoji size: 48px (opportunities)
- Arrow icon: 16px
- Timeline dots: 12px

---

**This wireframe represents the complete structure and can be used as a blueprint for implementation or design tools.**
