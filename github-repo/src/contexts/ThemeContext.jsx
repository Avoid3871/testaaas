import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check for saved theme preference, default to light mode
    const savedTheme = localStorage.getItem('hexacore-theme')
    
    let shouldBeDark = false
    
    // Only use saved theme if it exists, otherwise always start with light mode
    if (savedTheme === 'dark') {
      shouldBeDark = true
    }
    // Ignore system preference - always start with light mode for first-time visitors
    
    setIsDarkMode(shouldBeDark)
    
    // Apply theme to document
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    setIsLoaded(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('hexacore-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('hexacore-theme', 'light')
    }
  }

  const value = {
    isDarkMode,
    toggleTheme,
    isLoaded,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

