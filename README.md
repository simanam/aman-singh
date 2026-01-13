# Amandeep Singh - Personal Portfolio

A modern, animated personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Live Site

[https://simanam.github.io/aman-singh](https://simanam.github.io/aman-singh)

## Features

- **Interactive Avatar** - SVG avatar with mouse-tracking eyes, natural eyebrow movement, and fun expressions
- **Smooth Animations** - Page transitions and scroll-triggered animations using Framer Motion
- **Responsive Design** - Mobile-first design that works across all devices
- **Glassmorphism UI** - Modern glass-effect components with subtle shadows
- **Static Export** - Optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/simanam/aman-singh.git

# Navigate to the project
cd aman-singh

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# The static files will be in the 'out' directory
```

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles and Tailwind config
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page component
├── components/
│   ├── InteractiveAvatar.tsx  # Animated SVG avatar
│   ├── Navigation.tsx         # Responsive navbar
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About & timeline
│   ├── Expertise.tsx         # Skills & expertise
│   ├── Projects.tsx          # Project showcase
│   ├── Contact.tsx           # Contact section
│   └── Footer.tsx            # Footer
public/
├── favicon.svg        # Site favicon
├── background.svg     # Background pattern
└── Aman_Singh_Resume.docx  # Downloadable resume
```

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

## Author

**Amandeep Singh**
- LinkedIn: [linkedin.com/in/amand-singh](https://www.linkedin.com/in/amand-singh/)
- GitHub: [github.com/simanam](https://github.com/simanam)
- Email: aman@logixtecs.com
