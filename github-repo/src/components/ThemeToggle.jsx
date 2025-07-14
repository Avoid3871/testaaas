import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? 0 : 1,
          opacity: isDarkMode ? 0 : 1,
          rotate: isDarkMode ? 180 : 0,
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? 1 : 0,
          opacity: isDarkMode ? 1 : 0,
          rotate: isDarkMode ? 0 : -180,
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

