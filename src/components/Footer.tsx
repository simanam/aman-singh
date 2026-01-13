'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-white border-t border-muted/10">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple to-teal flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">A</span>
            </div>
            <span className="font-display font-medium text-foreground">
              Aman<span className="text-purple">.</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-muted"
          >
            &copy; {currentYear} Amandeep Singh. Designed & Built with{' '}
            <span className="text-purple">♥</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 text-sm text-muted"
          >
            <a href="#home" className="hover:text-purple transition-colors">
              Home
            </a>
            <span className="text-muted/30">•</span>
            <a href="#about" className="hover:text-purple transition-colors">
              About
            </a>
            <span className="text-muted/30">•</span>
            <a href="#contact" className="hover:text-purple transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
