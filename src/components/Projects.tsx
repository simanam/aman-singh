'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Rigsy Fleet',
    category: 'Startup',
    description:
      'AI load evaluation platform for trucking fleet managers. Ask "Should I take this load?" and get a real answer — above/below market rate, net profit after fuel, route data, and lane signal intelligence.',
    tech: ['Claude Tool Use', 'SSE Streaming', 'USDA/EIA/FRED/BTS', 'PostGIS', 'FastAPI'],
    highlights: [
      'Live market rate comparison',
      'Net profit calculation after fuel',
      'Lane signal intelligence',
    ],
    image: '/projects/rigsy-fleet.jpg',
    color: 'purple',
    featured: true,
    status: 'In Development',
  },
  {
    id: 2,
    title: 'USPS AI Data Platform',
    category: 'Enterprise AI',
    description:
      'Multi-tenant, role-based AI platform serving 30,000+ USPS employees. PII detection at ingestion, Okta identity verification, compliance-first design, scaled from 1,000-user pilot.',
    tech: ['Azure OpenAI', 'Python', 'React', 'PostgreSQL', 'Okta'],
    highlights: [
      'Scaled from 1,000 to 30,000+ users',
      'PII detection at ingestion',
      'Full audit logging for compliance',
    ],
    image: '/projects/usps-platform.jpg',
    color: 'teal',
    featured: true,
    status: 'Production',
  },
  {
    id: 3,
    title: 'Truckers Routine',
    category: 'Startup',
    description:
      'Health and wellness app for truck drivers. 180 active users, App Store presence. Nutrition database covering all major US and UK truck stop chains.',
    tech: ['iOS', 'App Store', 'Nutrition Data'],
    highlights: [
      '180 active drivers',
      'App Store presence',
      'Comprehensive nutrition database',
    ],
    image: '/projects/truckers-routine.jpg',
    color: 'purple',
    featured: false,
    status: 'Live · 180 users',
  },
  {
    id: 4,
    title: 'Rigsy Driver',
    category: 'Startup',
    description:
      'Voice-first AI co-pilot for truck drivers — GPS-verified detention tracking, nutrition logging by voice, offline-first mobile, multi-provider AI routing.',
    tech: ['Swift/SwiftUI', 'Claude', 'GPT-4o', 'PostGIS', 'FastAPI'],
    highlights: [
      'Voice-first AI interaction',
      'GPS-verified detention tracking',
      'Offline-first mobile architecture',
    ],
    image: '/projects/rigsy-driver.jpg',
    color: 'teal',
    featured: false,
    status: 'In Development',
  },
]

const categories = ['All', 'Enterprise AI', 'Startup']

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-purple">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl">
            AI products built for the real world — from enterprise platforms to founder-led startups
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-teal rounded-full mt-4" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-purple text-white shadow-lg shadow-purple/25'
                  : 'bg-white border border-muted/20 text-muted hover:border-purple/30 hover:text-purple'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group ${project.featured ? '' : ''}`}
            >
              <div
                className={`glass rounded-2xl overflow-hidden hover-lift transition-all border border-transparent hover:border-purple/20 ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image/Visual Area */}
                  <div className="lg:w-2/5 relative">
                    <div
                      className={`h-64 lg:h-full min-h-[300px] ${
                        project.color === 'purple'
                          ? 'bg-gradient-to-br from-purple/20 via-purple/10 to-teal/10'
                          : 'bg-gradient-to-br from-teal/20 via-teal/10 to-purple/10'
                      } flex items-center justify-center`}
                    >
                      {/* Decorative elements */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                          className={`absolute w-32 h-32 rounded-full ${
                            project.color === 'purple' ? 'bg-purple/20' : 'bg-teal/30'
                          } blur-2xl`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                        <div
                          className={`relative z-10 w-20 h-20 rounded-2xl ${
                            project.color === 'purple' ? 'bg-purple' : 'bg-teal-dark'
                          } flex items-center justify-center shadow-xl`}
                        >
                          <span className="text-3xl font-display font-bold text-white">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </div>

                      {/* Category badge */}
                      <span
                        className={`absolute top-4 ${
                          index % 2 === 0 ? 'left-4' : 'right-4'
                        } px-3 py-1.5 rounded-full text-xs font-semibold ${
                          project.color === 'purple'
                            ? 'bg-purple/90 text-white'
                            : 'bg-teal-dark/90 text-white'
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="lg:w-3/5 p-6 lg:p-8">
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-purple transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted leading-relaxed mb-5">{project.description}</p>

                    {/* Highlights */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted">
                            <svg
                              className={`w-5 h-5 mr-2 flex-shrink-0 ${
                                project.color === 'purple' ? 'text-purple' : 'text-teal-dark'
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-background text-xs font-medium text-muted border border-muted/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Status */}
                    {'status' in project && (
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          project.status === 'Production' || project.status?.startsWith('Live')
                            ? 'bg-green-500'
                            : 'bg-yellow-500'
                        }`} />
                        <span className="text-xs font-medium text-muted">{project.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
