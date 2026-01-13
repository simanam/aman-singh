'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: '2020 - Present',
    role: 'Lead Engineer - AI Data Platform',
    company: 'USPS',
    description: 'Architecting multi-tenant AI platform serving 30,000+ employees with data governance and compliance',
    type: 'current',
  },
  {
    year: '2024 - Present',
    role: 'Founder',
    company: 'Logixtecs Solutions LLC',
    description: 'Building AI infrastructure for logistics industry (after hours)',
    type: 'current',
  },
  {
    year: '2022 - 2023',
    role: 'AI Consultant',
    company: 'Envoy Health',
    description: 'Healthcare AI solutions and data governance',
    type: 'work',
  },
]

const techStack = [
  { category: 'AI/ML', items: ['Azure OpenAI', 'LangChain', 'RAG Systems', 'Vector DBs'] },
  { category: 'Backend', items: ['Python', 'Node.js', 'FastAPI', 'PostgreSQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { category: 'Infrastructure', items: ['Azure', 'Okta', 'Docker', 'CI/CD'] },
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
              I design enterprise-grade AI systems where{' '}
              <span className="text-foreground font-medium">data governance</span>,{' '}
              <span className="text-foreground font-medium">compliance</span>, and{' '}
              <span className="text-foreground font-medium">intelligent workflows</span> are architectural
              requirements—not afterthoughts.
            </p>

            <p className="text-muted leading-relaxed">
              As Lead Engineer for the <span className="text-purple font-semibold">USPS AI Data Platform</span>,
              I architected and shipped a multi-tenant, role-based AI system serving 30,000+ employees.
              The platform features PII detection, role-based document access, and Okta-integrated
              identity verification across all interactions.
            </p>

            <p className="text-muted leading-relaxed">
              I think about AI systems like security engineers think about networks:{' '}
              <span className="italic text-foreground">
                What are the attack surfaces? Where do bad things leak? What prevents that?
              </span>
            </p>

            <div className="pt-4">
              <h3 className="font-display font-semibold text-foreground mb-4">Core Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((stack, idx) => (
                  <motion.div
                    key={stack.category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <h4 className="text-sm font-semibold text-purple mb-2">{stack.category}</h4>
                    <ul className="space-y-1">
                      {stack.items.map((item) => (
                        <li key={item} className="text-sm text-muted flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
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
