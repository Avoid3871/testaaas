import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ScrollFloat = ({ 
  children, 
  className = "", 
  intensity = 50, 
  direction = "up",
  speed = 1
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const getTransform = () => {
    const range = intensity * speed
    
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], [range, -range])
      case "down":
        return useTransform(scrollYProgress, [0, 1], [-range, range])
      case "left":
        return useTransform(scrollYProgress, [0, 1], [range, -range])
      case "right":
        return useTransform(scrollYProgress, [0, 1], [-range, range])
      default:
        return useTransform(scrollYProgress, [0, 1], [range, -range])
    }
  }

  const transform = getTransform()

  const style = direction === "left" || direction === "right" 
    ? { x: transform }
    : { y: transform }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default ScrollFloat

