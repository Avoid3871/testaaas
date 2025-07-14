import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "bottom",
  baseOpacity = 0,
  enableBlur = false,
  baseRotation = 0,
  blurStrength = 4,
  intensity = 80 // Erhöhte Intensität
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -20% 0px" // Frühere Triggerung
  })

  const getInitialState = () => {
    const base = {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
      rotate: baseRotation
    }

    switch (direction) {
      case 'top':
        return { ...base, y: -intensity }
      case 'bottom':
        return { ...base, y: intensity }
      case 'left':
        return { ...base, x: -intensity }
      case 'right':
        return { ...base, x: intensity }
      default:
        return { ...base, y: intensity }
    }
  }

  const getAnimateState = () => {
    return {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      rotate: 0
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialState()}
      animate={isInView ? getAnimateState() : getInitialState()}
      transition={{
        duration: 0.5, // Schnellere Animation
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Smoother easing
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal

