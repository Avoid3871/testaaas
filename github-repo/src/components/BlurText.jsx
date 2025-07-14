import React, { useEffect, useRef, useState, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ])

  const keyframes = {}
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])]
  })

  return keyframes
}

const BlurText = ({
  text = '',
  delay = 50, // Schnellerer Delay zwischen Wörtern
  className = '',
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete = () => {},
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: '0px 0px -10% 0px' // Frühere Triggerung
  })
  const [animationComplete, setAnimationComplete] = useState(false)

  const keyframes = useMemo(() => {
    const from = {
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'top' ? -30 : direction === 'bottom' ? 30 : 0,
      x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    }

    const to = {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      x: 0,
    }

    return buildKeyframes(from, [to])
  }, [direction])

  const items = useMemo(() => {
    if (animateBy === 'words') {
      return text.split(' ')
    }
    return text.split('')
  }, [text, animateBy])

  useEffect(() => {
    if (animationComplete) {
      onAnimationComplete()
    }
  }, [animationComplete, onAnimationComplete])

  return (
    <motion.div ref={ref} className={className}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          className={animateBy === 'words' ? 'inline-block mr-2' : 'inline-block'}
          initial={{
            filter: 'blur(10px)',
            opacity: 0,
            y: direction === 'top' ? -30 : direction === 'bottom' ? 30 : 0,
            x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
          }}
          animate={
            isInView
              ? {
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: 0,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: 0.4, // Schnellere Animation
            delay: isInView ? index * (delay / 1000) : 0,
            ease: [0.25, 0.46, 0.45, 0.94], // Smoother easing
            type: "spring",
            stiffness: 120,
            damping: 12
          }}
          onAnimationComplete={() => {
            if (index === items.length - 1) {
              setAnimationComplete(true)
            }
          }}
        >
          {item}
          {animateBy === 'words' && index < items.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default BlurText

