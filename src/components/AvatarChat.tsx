'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InteractiveAvatar from './InteractiveAvatar'

interface AvatarChatProps {
  isThinking: boolean
  setIsThinking: (value: boolean) => void
}

export default function AvatarChat({ isThinking, setIsThinking }: AvatarChatProps) {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [userQuestion, setUserQuestion] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || isThinking) return

    const question = message.trim()
    setUserQuestion(question)
    setIsThinking(true)
    setError('')
    setResponse('')
    setMessage('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
      } else {
        setResponse(data.response)
      }
    } catch {
      setError('Failed to connect. Please try again.')
    } finally {
      setIsThinking(false)
    }
  }

  const handleClear = () => {
    setResponse('')
    setUserQuestion('')
    setError('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* Speech Bubble - Response from avatar */}
      {/* Positioned to the upper left of the avatar, with pointer pointing toward avatar */}
      <AnimatePresence>
        {(response || error) && !isThinking && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute -left-2 sm:-left-4 top-[60px] sm:top-[80px] z-20 w-[180px] sm:w-[220px]"
          >
            <div className="relative bg-white rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl border-2 border-foreground/80">
              <p className="text-foreground text-xs sm:text-sm leading-relaxed font-medium">
                {error ? error : response}
              </p>
              {/* Speech bubble pointer - pointing down-right toward avatar */}
              <div className="absolute -bottom-3 right-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-foreground/80" />
              <div className="absolute -bottom-[10px] right-[42px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[11px] border-t-white" />
            </div>
            {/* Clear button */}
            <button
              onClick={handleClear}
              className="absolute -top-2 -right-2 w-6 h-6 bg-purple text-white rounded-full text-xs flex items-center justify-center hover:bg-purple/80 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thinking Cloud - positioned to the upper right */}
      <AnimatePresence>
        {isThinking && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute -right-2 sm:-right-4 top-[40px] sm:top-[50px] z-20"
          >
            {/* Thought bubble trail - leading down toward head */}
            <div className="absolute -bottom-6 left-2 flex flex-col items-center gap-1">
              <motion.div
                className="w-3 h-3 bg-white rounded-full border-2 border-foreground/60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full border-2 border-foreground/60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
            {/* Main thought cloud */}
            <motion.div
              className="relative bg-white rounded-[40px] px-4 py-2 sm:px-5 sm:py-3 shadow-lg border-2 border-foreground/60"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            >
              <span className="text-foreground font-semibold text-xs sm:text-sm italic">Thinking..</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar */}
      <InteractiveAvatar isThinking={isThinking} />

      {/* Input Box - Below avatar */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative -mt-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={userQuestion && isThinking ? userQuestion : "Ask me ?"}
            maxLength={500}
            className="w-[200px] sm:w-[280px] px-5 py-3 rounded-xl bg-white border-2 border-purple text-foreground text-center font-medium placeholder:text-purple/60 focus:outline-none focus:ring-2 focus:ring-purple/30 disabled:opacity-70"
            disabled={isThinking}
          />
          {message.trim() && !isThinking && (
            <motion.button
              type="submit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute right-2 w-8 h-8 bg-purple text-white rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          )}
        </div>

        {/* Suggested questions - show only when no response */}
        {!response && !isThinking && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2 mt-3 justify-center max-w-[300px]"
          >
            {['What do you do?', 'Your AI experience?', 'Contact info?'].map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setMessage(q)}
                className="px-3 py-1 text-xs rounded-full bg-purple/10 text-purple hover:bg-purple/20 transition-colors"
              >
                {q}
              </button>
            ))}
          </motion.div>
        )}
      </motion.form>
    </div>
  )
}
