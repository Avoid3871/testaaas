import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import MetallicPaint from './MetallicPaint'
import TiltedCard from './TiltedCard'
import { fetchAndProcessSvg } from '../utils/logoUtils'
import logoSvgPath from '../assets/logo.svg'

const MetallicLogo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [logoImageData, setLogoImageData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    async function loadLogoData() {
      try {
        setIsLoading(true)
        const processedLogo = await fetchAndProcessSvg(logoSvgPath)
        setLogoImageData(processedLogo.imageData)
      } catch (error) {
        console.error('Failed to load logo for metallic effect:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadLogoData()
  }, [])

  return (
    <motion.div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Logo container */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut"
        }}
      >
        {/* Hexagon Logo with Metallic Effect */}
        <div className="relative mb-8 flex justify-center items-center">
          {/* TiltedCard wrapper */}
          <TiltedCard
            imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='transparent'/%3E%3C/svg%3E"
            containerHeight="400px"
            containerWidth="400px"
            imageHeight="100%"
            imageWidth="100%"
            scaleOnHover={1.05}
            rotateAmplitude={6}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full flex items-center justify-center">
                {/* Glow effect */}
                <div className={`absolute rounded-full blur-3xl transition-all duration-1000 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-30' 
                    : 'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-20'
                }`} 
                style={{ 
                  width: '300px', 
                  height: '300px',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
                
                {/* Main Logo with Metallic Paint Effect */}
                <motion.div
                  className="relative z-10 w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeOut"
                  }}
                  style={{
                    filter: `drop-shadow(0 0 20px ${isDarkMode ? 'rgba(147, 51, 234, 0.3)' : 'rgba(102, 126, 234, 0.3)'})`,
                  }}
                >
                  {isLoading || !logoImageData ? (
                    // Fallback gradient background while loading
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea)',
                        backgroundSize: '300% 300%',
                        WebkitMask: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z' fill='white'/%3E%3Cpath d='M50 25 L70 35 L70 55 L50 65 L30 55 L30 35 Z' fill='black'/%3E%3C/svg%3E")`,
                        mask: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z' fill='white'/%3E%3Cpath d='M50 25 L70 35 L70 55 L50 65 L30 55 L30 35 Z' fill='black'/%3E%3C/svg%3E")`,
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                      }}
                    />
                  ) : (
                    // Metallic Paint effect when image data is loaded
                    <div className="w-full h-full flex items-center justify-center" style={{
                      WebkitMask: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z' fill='white'/%3E%3Cpath d='M50 25 L70 35 L70 55 L50 65 L30 55 L30 35 Z' fill='black'/%3E%3C/svg%3E")`,
                      mask: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z' fill='white'/%3E%3Cpath d='M50 25 L70 35 L70 55 L50 65 L30 55 L30 35 Z' fill='black'/%3E%3C/svg%3E")`,
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                    }}>
                      <MetallicPaint 
                        imageData={logoImageData} 
                        params={{
                          patternScale: isDarkMode ? 2.5 : 2,
                          refraction: 0.02,
                          edge: 1,
                          patternBlur: 0.005,
                          liquid: 0.08,
                          speed: 0.25
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              </div>
            }
          />
        </div>

        {/* Company Name */}
        <motion.h1
          className={`text-5xl md:text-7xl font-bold mb-4 transition-colors duration-1000 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hexacore Studio
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className={`text-xl md:text-2xl transition-colors duration-1000 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Moderne Webentwicklung mit Leidenschaft für Perfektion
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-1000 ${
            isDarkMode ? 'border-white' : 'border-gray-900'
          }`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className={`w-1 h-3 rounded-full mt-2 transition-colors duration-1000 ${
              isDarkMode ? 'bg-white' : 'bg-gray-900'
            }`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MetallicLogo

