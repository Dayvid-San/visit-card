# Dayvid - Personal Portfolio Website

A production-ready, accessible, and responsive personal website built with Next.js (App Router) and TypeScript, featuring a unique theatrical "door" page transition effect.

## 🎭 Features

- **Theatrical Door Transitions**: Smooth footer-to-header animation with futuristic sound effects
- **Multi-page Portfolio**: Home, Programador, Empreendedor, Universitário, and Portfolio pages
- **Dual Portfolio Sections**: Separate galleries for Programmer and Researcher projects
- **Dark/Light Theme**: Toggle between themes with preference persistence
- **Audio Controls**: Mute/unmute sound effects with localStorage persistence
- **Accessibility First**: 
  - Respects `prefers-reduced-motion` (uses simple crossfade instead)
  - ARIA announcements during transitions
  - Keyboard navigation support
  - Screen reader optimized
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance Optimized**: Image lazy-loading with Next.js Image component

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/dayvid/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

Or connect your GitHub repository to Vercel for automatic deployments.

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── programador/
│   │   └── page.tsx            # Programador page
│   ├── empreendedor/
│   │   └── page.tsx            # Empreendedor page
│   ├── universitario/
│   │   └── page.tsx            # Universitário page
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio with dual sections
│   └── globals.css             # Global styles & CSS variables
├── components/
│   ├── client-layout.tsx       # Client-side layout wrapper
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Animated footer (door element)
│   ├── dayvid-logo.tsx         # Logo SVG component
│   ├── theme-provider.tsx      # Theme context & toggle
│   ├── audio-provider.tsx      # Audio management & preloading
│   ├── door-transition-provider.tsx  # Transition coordinator
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── utils.ts                # Utility functions
│   └── animation-utils.ts      # Door animation utility
├── public/
│   └── assets/
│       └── sounds/
│           ├── door-close-futuristic.mp3
│           └── door-close-futuristic.ogg
└── README.md
\`\`\`

## 🎨 Customization

### Animation Timing

Edit CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --door-close-duration: 700ms;
  --door-open-duration: 600ms;
  --door-pause-duration: 120ms;
}
\`\`\`

### Theme Colors

Modify design tokens in `app/globals.css` under `:root` and `.dark` selectors.

### Audio Files

Replace audio files in `public/assets/sounds/` with your own:
- `door-close-futuristic.mp3` (primary)
- `door-close-futuristic.ogg` (fallback)

### Content

Update page content in respective `app/*/page.tsx` files.

## 🧪 Testing

The animation coordinator includes built-in console logging for debugging:

\`\`\`typescript
console.log("[v0] Animation started:", direction)
console.log("[v0] Audio playback:", status)
\`\`\`

To test the door animation manually:

\`\`\`typescript
import { animateDoor } from '@/lib/animation-utils'

// Close door
await animateDoor({ direction: 'close', duration: 700 })

// Open door
await animateDoor({ direction: 'open', duration: 600 })
\`\`\`

## ♿ Accessibility Features

- **Reduced Motion**: Automatically detects `prefers-reduced-motion` and uses simple crossfade
- **ARIA Live Regions**: Announces page transitions to screen readers
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Proper focus handling during transitions
- **Semantic HTML**: Uses appropriate HTML5 semantic elements
- **Alt Text**: All images include descriptive alt text

## 🔧 Technologies

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Analytics**: Vercel Analytics

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- GitHub: [@dayvid](https://github.com/dayvid)
- LinkedIn: [linkedin.com/in/dayvid](https://linkedin.com/in/dayvid)
- Email: dayvid@example.com

---

Built with ❤️ using Next.js and TypeScript
