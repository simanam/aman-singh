'use client'

import { motion } from 'framer-motion'
import InteractiveAvatar from './InteractiveAvatar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const skills = [
  'Data Governance',
  'AI Architecture',
  'Enterprise Security',
  'Compliance Design',
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen mesh-bg relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-purple/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-width section-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple/10 text-purple text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-purple mr-2 animate-pulse" />
                Open to AI Product Leadership roles
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted mb-2"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Aman<span className="text-purple">deep</span> Singh
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-muted mb-6"
            >
              Enterprise AI Systems Designer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted/80 mb-8 leading-relaxed"
            >
              I architect <span className="text-foreground font-medium">production AI platforms</span> where
              data governance, compliance, and intelligent workflows are{' '}
              <span className="text-purple font-medium">architectural requirements</span>—not afterthoughts.
              Built systems serving <span className="text-foreground font-medium">30,000+ users</span> at USPS.
            </motion.p>

            {/* Skills Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-white/60 border border-purple/10 text-sm font-medium text-foreground/80 hover:border-purple/30 hover:bg-white transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="px-8 py-3.5 rounded-xl bg-purple text-white font-semibold text-center shadow-lg shadow-purple/25 hover:shadow-xl hover:shadow-purple/30 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3.5 rounded-xl border-2 border-teal-dark text-teal-dark font-semibold text-center hover:bg-teal-dark hover:text-white transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="hidden lg:flex items-center gap-2 mt-16 text-muted/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="w-6 h-10 rounded-full border-2 border-muted/30 flex justify-center pt-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-purple"
                  animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-sm">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Background pattern behind avatar */}
              <div
                className="absolute -inset-8 opacity-30"
                style={{
                  backgroundImage: 'url(/background.svg)',
                  backgroundRepeat: 'repeat',
                  backgroundSize: '160px auto',
                }}
              />
              {/* Glow effect behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-teal/20 rounded-full blur-3xl scale-110" />
              <InteractiveAvatar />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
