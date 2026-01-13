'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const expertiseAreas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Data Governance & Security',
    description: 'PII detection and blocking at ingestion with zero false negatives. Role-based document access ensuring users only interact with authorized data.',
    features: ['PII Detection', 'Access Control', 'Audit Logging', 'Compliance Design'],
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Enterprise AI Architecture',
    description: 'Multi-tenant platforms with full-stack coordination from identity management to Azure infrastructure. Scaled systems from pilot to enterprise-wide deployment.',
    features: ['Multi-Tenant Design', 'Identity Integration', 'Azure Infrastructure', 'Scalable Systems'],
    color: 'teal',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Intelligent Workflows',
    description: 'File approval workflows enforcing organizational hierarchy. Context engineering layers ensuring AI access only to authorized documents.',
    features: ['Approval Workflows', 'Context Engineering', 'Human-in-Loop', 'Document Indexing'],
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Compliance Management',
    description: 'Compliance-first design for sensitive network data. Special rules for sensitive groups with stricter controls and forensic analysis capabilities.',
    features: ['Regulatory Compliance', 'Forensic Analysis', 'Sensitive Data Rules', 'Identity Verification'],
    color: 'teal',
  },
]

const metrics = [
  { value: '30K+', label: 'Users Served', description: 'Enterprise-wide deployment' },
  { value: '0', label: 'False Negatives', description: 'In PII detection' },
  { value: '100%', label: 'Audit Coverage', description: 'All interactions logged' },
  { value: '30x', label: 'Scale Growth', description: 'From pilot to production' },
]

export default function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="expertise" className="section-padding mesh-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Areas of <span className="text-purple">Expertise</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Building enterprise AI systems with security-first architecture and compliance at the core
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-teal rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover-lift transition-all"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-purple mb-1">
                {metric.value}
              </div>
              <div className="font-semibold text-foreground text-sm">{metric.label}</div>
              <div className="text-xs text-muted mt-1">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 h-full hover-lift hover-glow transition-all border border-transparent hover:border-purple/20">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    area.color === 'purple'
                      ? 'bg-purple/10 text-purple'
                      : 'bg-teal/20 text-teal-dark'
                  } group-hover:scale-110 transition-transform`}
                >
                  {area.icon}
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {area.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-4">{area.description}</p>

                <div className="flex flex-wrap gap-2">
                  {area.features.map((feature) => (
                    <span
                      key={feature}
                      className={`text-xs px-3 py-1.5 rounded-full ${
                        area.color === 'purple'
                          ? 'bg-purple/10 text-purple'
                          : 'bg-teal/20 text-teal-dark'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="relative max-w-3xl mx-auto">
            <div className="text-6xl text-purple/20 absolute -top-4 -left-4">&ldquo;</div>
            <p className="text-lg sm:text-xl text-muted italic px-8">
              I think about AI systems like security engineers think about networks: what are the
              attack surfaces? Where do bad things leak? What prevents that?
            </p>
            <div className="text-6xl text-purple/20 absolute -bottom-8 -right-4 rotate-180">&rdquo;</div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
