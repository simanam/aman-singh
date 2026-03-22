'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: '2019 - Present',
    role: 'Lead Engineer & AI Platform Architect',
    company: 'USPS',
    description: 'Led architecture and enterprise-wide deployment of USPS\'s internal AI Data Platform. Scaled from 1,000-user pilot to 30,000+ employees. Built PII detection, role-based access, Okta integration, and full audit logging.',
    type: 'current',
  },
  {
    year: '2025 - Present',
    role: 'Founder & AI Product Engineer',
    company: 'Logixtecs',
    description: 'Building Rigsy — AI load evaluation and driver co-pilot for the trucking industry. Claude tool use, live USDA/EIA/FRED/BTS data, PostGIS fuel station search, voice-first mobile architecture. Truckers Routine: 180 active drivers, App Store.',
    type: 'current',
  },
  {
    year: '2023 - Present',
    role: 'AI Consultant / CPO',
    company: 'Envoy Health',
    description: 'Led product lifecycle as CPO in medical tourism space. Now consulting on AI strategy including a conversational doctor-matching platform (in product requirements phase).',
    type: 'current',
  },
]


export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-purple">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-teal rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted leading-relaxed">
              I sit at the intersection of <span className="text-foreground font-medium">product and engineering</span>.
              I can write the spec, understand the architecture, and get it deployed.
            </p>

            <p className="text-muted leading-relaxed">
              At <span className="text-purple font-semibold">USPS</span>, I led the architecture and rollout of an
              AI platform that scaled from 1,000 to 30,000+ employees — handling PII detection, role-based access,
              compliance workflows, and enterprise-wide deployment. I coordinated across engineering, identity,
              infrastructure, and business stakeholders to ship something that actually stuck.
            </p>

            <p className="text-muted leading-relaxed">
              As a founder at <span className="text-purple font-semibold">Logixtecs</span>, I&apos;m building
              Rigsy — an AI suite for the trucking industry. Rigsy Fleet evaluates loads using live data from
              USDA, EIA, FRED, and BTS. Truckers Routine has 180 active drivers on the App Store. I&apos;ve
              collected proprietary data across 1,768 US fuel stations and all major food chains.
            </p>

            <p className="text-muted leading-relaxed">
              I&apos;m most effective in roles where AI needs to go from idea to working system inside complex
              environments — and where being both technical and product-minded is an advantage, not a conflict.
            </p>

            <div className="pt-4">
              <blockquote className="border-l-4 border-purple/30 pl-4">
                <p className="text-muted italic leading-relaxed">
                  &ldquo;I build AI like engineers build security systems — always asking: what are the
                  attack surfaces? Where do things break? What prevents that?&rdquo;
                </p>
              </blockquote>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display font-semibold text-foreground mb-6">Experience Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-teal to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 ${
                        item.type === 'current'
                          ? 'bg-purple border-purple/30 animate-pulse'
                          : 'bg-white border-teal'
                      }`}
                    />

                    <div className="glass rounded-xl p-4 hover-lift hover-glow transition-all">
                      <span className="text-xs font-medium text-purple">{item.year}</span>
                      <h4 className="font-semibold text-foreground mt-1">{item.role}</h4>
                      <p className="text-sm text-teal-dark font-medium">{item.company}</p>
                      <p className="text-sm text-muted mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
