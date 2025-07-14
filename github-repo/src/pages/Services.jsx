import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Code, Smartphone, Search, Users, Zap, Globe, Server, Palette, Shield, Headphones, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
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

  const services = [
    {
      icon: Code,
      title: "Webentwicklung",
      description: "Moderne, responsive Websites und Webanwendungen mit den neuesten Technologien wie React, Next.js und TypeScript.",
      features: ["React & Next.js", "TypeScript", "Progressive Web Apps", "API Integration"],
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Mobile First Design",
      description: "Responsive Design, das auf allen Geräten perfekt funktioniert. Optimiert für mobile Nutzer und Desktop-Erlebnisse.",
      features: ["Responsive Design", "Touch-optimiert", "Cross-Browser", "Performance"],
      color: "green"
    },
    {
      icon: Search,
      title: "SEO Optimierung",
      description: "Technische und inhaltliche Suchmaschinenoptimierung für bessere Sichtbarkeit und höhere Rankings.",
      features: ["On-Page SEO", "Technical SEO", "Content Strategy", "Analytics"],
      color: "purple"
    },
    {
      icon: Zap,
      title: "Performance Optimierung",
      description: "Blitzschnelle Ladezeiten und optimierte Performance für die beste Nutzererfahrung.",
      features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "Caching"],
      color: "orange"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Benutzerfreundliche Designs, die Ihre Marke zum Leben erwecken und Conversions steigern.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "pink"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robuste Backend-Lösungen und APIs für komplexe Webanwendungen und Datenmanagement.",
      features: ["REST APIs", "Database Design", "Cloud Integration", "Security"],
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Security & Wartung",
      description: "Umfassende Sicherheitsmaßnahmen und regelmäßige Wartung für Ihre Website.",
      features: ["SSL Certificates", "Security Audits", "Regular Updates", "Backup Solutions"],
      color: "red"
    },
    {
      icon: Globe,
      title: "Hosting & Domain",
      description: "Professionelles Hosting und Domain-Management für eine zuverlässige Online-Präsenz.",
      features: ["Cloud Hosting", "Domain Setup", "CDN Integration", "Monitoring"],
      color: "teal"
    },
    {
      icon: Headphones,
      title: "Support & Beratung",
      description: "Kontinuierlicher Support und strategische Beratung für Ihre digitalen Projekte.",
      features: ["24/7 Support", "Strategic Consulting", "Training", "Documentation"],
      color: "yellow"
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "ab 2.500€",
      description: "Perfekt für kleine Unternehmen und Startups",
      features: [
        "Responsive Website (bis 5 Seiten)",
        "Modernes Design",
        "SEO Grundoptimierung",
        "Kontaktformular",
        "3 Monate Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "ab 5.000€",
      description: "Ideal für wachsende Unternehmen",
      features: [
        "Umfangreiche Website (bis 15 Seiten)",
        "Custom Design & Animationen",
        "Erweiterte SEO Optimierung",
        "CMS Integration",
        "E-Commerce Funktionen",
        "6 Monate Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "ab 10.000€",
      description: "Für große Unternehmen mit komplexen Anforderungen",
      features: [
        "Komplexe Webanwendung",
        "Custom Backend Development",
        "API Integrationen",
        "Performance Optimierung",
        "Security Audit",
        "12 Monate Support",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-light text-gray-900 dark:text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Unsere
            <br />
            <motion.span 
              className="font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Services
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Von der ersten Idee bis zur erfolgreichen Umsetzung - wir bieten alle Services aus einer Hand 
            für Ihre digitale Transformation.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className={`h-6 w-6 text-${service.color}-600 dark:text-${service.color}-300`} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6">
              Unsere <span className="font-semibold">Pakete</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparente Preise für jede Unternehmensgröße. Alle Pakete sind individuell anpassbar.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                variants={fadeInUp}
                className={`relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Beliebt
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-light text-gray-900 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Paket auswählen
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6">
              Unser <span className="font-semibold">Prozess</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der ersten Idee bis zum erfolgreichen Launch - so arbeiten wir zusammen.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Beratung & Konzept",
                description: "Wir analysieren Ihre Anforderungen und entwickeln ein maßgeschneidertes Konzept."
              },
              {
                step: "02", 
                title: "Design & Prototyping",
                description: "Erstellung von Wireframes und Designs, die Ihre Marke perfekt repräsentieren."
              },
              {
                step: "03",
                title: "Entwicklung & Testing",
                description: "Professionelle Umsetzung mit modernsten Technologien und ausführlichen Tests."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Erfolgreicher Launch und kontinuierlicher Support für Ihren langfristigen Erfolg."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
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
            Bereit für Ihr <span className="font-semibold">Projekt?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen. 
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
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/portfolio">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                  Portfolio ansehen
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Services

