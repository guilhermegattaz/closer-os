import { motion } from 'motion/react'

interface DotPatternProps {
  width?: number
  height?: number
  cr?: number
  className?: string
}

export function DotPattern({ width = 20, height = 20, cr = 1, className = '' }: DotPatternProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, currentColor ${cr}px, transparent ${cr + 0.5}px)`,
        backgroundSize: `${width}px ${height}px`,
      }}
      animate={{
        backgroundPosition: ['0px 0px', `${width}px ${height}px`],
      }}
      transition={{
        duration: 28,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}
