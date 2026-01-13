'use client'

import { Navigation, Hero, About, Expertise, Projects, Contact, Footer } from '@/components'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
