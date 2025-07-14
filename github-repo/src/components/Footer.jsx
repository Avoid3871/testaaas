import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <footer className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Hexacore Studio Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold text-gray-900">Hexacore Studio</span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Moderne Webentwicklung für Unternehmen jeder Größe. 
              Wir verwandeln Ihre digitalen Visionen in beeindruckende Realität.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/services" className="hover:text-gray-900 transition-colors cursor-pointer">
                  Webentwicklung
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-900 transition-colors cursor-pointer">
                  SEO Optimierung
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-900 transition-colors cursor-pointer">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-900 transition-colors cursor-pointer">
                  Support & Wartung
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-gray-900 mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/about" className="hover:text-gray-900 transition-colors cursor-pointer">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-gray-900 transition-colors cursor-pointer">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900 transition-colors cursor-pointer">
                  Karriere
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900 transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-gray-900 mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="mailto:hello@hexacore-studio.de" className="hover:text-gray-900 transition-colors">
                  hello@hexacore-studio.de
                </a>
              </li>
              <li>
                <a href="tel:+49123456789" className="hover:text-gray-900 transition-colors">
                  +49 123 456 789
                </a>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                Berlin, Deutschland
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900 transition-colors cursor-pointer">
                  Kontakt aufnehmen
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Hexacore Studio. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-gray-900 transition-colors">
              Datenschutz
            </Link>
            <Link to="/contact" className="hover:text-gray-900 transition-colors">
              Impressum
            </Link>
            <Link to="/contact" className="hover:text-gray-900 transition-colors">
              AGB
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

