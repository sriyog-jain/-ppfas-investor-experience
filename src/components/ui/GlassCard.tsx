import React from 'react'
import { motion, MotionProps } from 'framer-motion'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'strong'
  hoverEffect?: boolean
  delay?: number
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = true,
  delay = 0,
  ...rest
}) => {
  const baseClasses = 'rounded-2xl backdrop-filter backdrop-blur-lg border border-opacity-20'

  const variantClasses = {
    default: 'bg-white/5 border-white/10',
    strong: 'bg-white/10 border-white/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={hoverEffect ? { y: -10, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)' } : {}}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${hoverEffect ? 'cursor-pointer hover-scale' : ''}
        ${className}
      `}
      {...(rest as any)}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
