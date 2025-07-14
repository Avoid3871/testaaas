import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, ExternalLink, Github, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import CardSwap from '../components/CardSwap'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

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

  const filters = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'web', label: 'Websites' },
    { id: 'app', label: 'Web Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'design', label: 'Design' }
  ]

  const projects = [
    {
      id: 1,
      title: "TechStart Solutions",
      category: "web",
      description: "Moderne Corporate Website für ein Technologie-Startup mit fokus auf Performance und SEO.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Next.js", "Tailwind CSS", "SEO"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "EcoShop Platform",
      category: "ecommerce",
      description: "Vollständige E-Commerce-Lösung für nachhaltiges Shopping mit integriertem Zahlungssystem.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "FinanceTracker App",
      category: "app",
      description: "Progressive Web App für persönliches Finanzmanagement mit Echtzeit-Analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "PWA", "Chart.js", "Firebase"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Restaurant Deluxe",
      category: "web",
      description: "Elegante Restaurant-Website mit Online-Reservierungssystem und Menü-Management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["React", "Booking System", "CMS", "Responsive"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Creative Agency Brand",
      category: "design",
      description: "Komplettes Branding und Website-Design für eine kreative Agentur.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tags: ["Figma", "Branding", "UI/UX", "Prototyping"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "HealthCare Portal",
      category: "app",
      description: "Patientenportal für Arztpraxen mit Terminbuchung und Dokumentenverwaltung.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["React", "Security", "HIPAA", "Dashboard"],
      link: "#",
      github: "#"
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-light text-gray-900 dark:text-white mb-8 leading-tight">
                Unser
                <br />
                <span className="font-semibold">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Entdecken Sie eine Auswahl unserer erfolgreichsten Projekte. 
                Jedes Projekt erzählt eine einzigartige Geschichte von Innovation, 
                Design und technischer Exzellenz.
              </p>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 px-8 py-4 text-lg">
                    Projekt besprechen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            
            {/* Featured Projects CardSwap */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <CardSwap cardDistance={30} verticalDistance={40} delay={4000} pauseOnHover={true}>
                <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop" 
                    alt="Project 1" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">TechStart Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Corporate Website mit modernem Design</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-xs">React</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs">Next.js</span>
                    </div>
                  </div>
                </div>
                <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop" 
                    alt="Project 2" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">EcoShop Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">E-Commerce für nachhaltiges Shopping</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded text-xs">E-Commerce</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded text-xs">Stripe</span>
                    </div>
                  </div>
                </div>
                <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop" 
                    alt="Project 3" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">FinanceTracker App</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">PWA für Finanzmanagement</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded text-xs">PWA</span>
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded text-xs">Analytics</span>
                    </div>
                  </div>
                </div>
              </CardSwap>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-black dark:bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={activeFilter} // Re-animate when filter changes
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <motion.a
                        href={project.link}
                        className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.link}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center transition-colors"
                    >
                      Projekt ansehen
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6">
              Unsere <span className="font-semibold">Technologien</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Wir arbeiten mit den modernsten Technologien und Tools, 
              um Ihnen die bestmöglichen Lösungen zu bieten.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "React", "Next.js", "TypeScript", "Node.js", 
              "Tailwind CSS", "Figma", "MongoDB", "PostgreSQL",
              "AWS", "Vercel", "Stripe", "Firebase"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-200">
                    {tech.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{tech}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6">
              Unser <span className="font-semibold">Entwicklungsprozess</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Jedes Projekt durchläuft einen strukturierten Prozess, 
              der Qualität, Effizienz und Kundenzufriedenheit gewährleistet.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Analyse der Anforderungen und Erstellung eines detaillierten Projektplans."
              },
              {
                step: "02", 
                title: "Design & Prototyping",
                description: "Entwicklung von Wireframes, Designs und interaktiven Prototypen."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile Entwicklung mit kontinuierlichen Tests und Code-Reviews."
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "Deployment, Performance-Optimierung und kontinuierliche Verbesserungen."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                variants={fadeInUp}
                className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-light mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Bereit für Ihr <span className="font-semibold">nächstes Projekt?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen. 
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 px-8 py-4 text-lg">
                  Projekt starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-white px-8 py-4 text-lg">
                  Services ansehen
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Portfolio

