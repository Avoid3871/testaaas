import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Code, Smartphone, Search, Users, Zap, Globe, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import CardSwap from '../components/CardSwap'
import MetallicLogo from '../components/MetallicLogo'
import BlurText from '../components/BlurText'
import ScrollReveal from '../components/ScrollReveal'
import ScrollFloat from '../components/ScrollFloat'

const Home = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

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
      color: "slate"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive Design, das auf allen Geräten perfekt funktioniert. Optimiert für mobile Nutzer und Desktop-Erlebnisse.",
      color: "gray"
    },
    {
      icon: Search,
      title: "SEO Optimierung",
      description: "Technische und inhaltliche Suchmaschinenoptimierung für bessere Sichtbarkeit und höhere Rankings.",
      color: "zinc"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Blitzschnelle Ladezeiten und optimierte Performance für die beste Nutzererfahrung.",
      color: "neutral"
    },
    {
      icon: Users,
      title: "Support",
      description: "Kontinuierlicher Support und Wartung für Ihre Website. Wir sind auch nach dem Launch für Sie da.",
      color: "stone"
    },
    {
      icon: Globe,
      title: "Hosting & Domain",
      description: "Professionelles Hosting und Domain-Management für eine zuverlässige Online-Präsenz.",
      color: "slate"
    }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with Metallic Logo */}
      <header className="relative">
        <motion.div style={{ opacity, scale }}>
          <MetallicLogo />
        </motion.div>
      </header>

      {/* Main Content Section */}
      <section className="pt-8 md:pt-20 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <BlurText 
                text="Moderne Webentwicklung"
                className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight transition-colors duration-300"
                delay={100}
                animateBy="words"
                direction="bottom"
              />
              
              <ScrollReveal delay={0.3} direction="bottom">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl leading-relaxed transition-colors duration-300">
                  Wir erstellen außergewöhnliche digitale Erlebnisse für Unternehmen jeder Größe. 
                  Von minimalistischen Websites bis hin zu komplexen Webanwendungen.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.6} direction="bottom">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" aria-label="Projekt besprechen - Kontakt aufnehmen">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto transition-colors duration-300">
                        Projekt besprechen
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link to="/portfolio" aria-label="Portfolio ansehen - Unsere besten Arbeiten">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="border-gray-800 text-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-800 dark:border-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto transition-colors duration-300 font-medium">
                        Portfolio ansehen
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            
            {/* CardSwap Demo with Professional Colors */}
            <div className="order-1 lg:order-2 flex justify-center">
              <ScrollFloat intensity={30} direction="up">
                <div className="relative">
                  <CardSwap cardDistance={40} verticalDistance={50} delay={3000} pauseOnHover={true}>
                    <article className="w-72 md:w-80 h-80 md:h-96 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-2xl border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 dark:bg-slate-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300">
                        <Code className="h-5 w-5 md:h-6 md:w-6 text-slate-300" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">React Development</h3>
                      <p className="text-slate-300 text-sm md:text-base">Moderne React-Anwendungen mit den neuesten Features und Best Practices.</p>
                    </article>
                    <article className="w-72 md:w-80 h-80 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 md:p-8 text-white shadow-2xl border border-gray-700 dark:border-gray-600 transition-colors duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 dark:bg-gray-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300">
                        <Smartphone className="h-5 w-5 md:h-6 md:w-6 text-gray-300" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">UI/UX Design</h3>
                      <p className="text-gray-300 text-sm md:text-base">Benutzerfreundliche Designs, die Ihre Marke zum Leben erwecken.</p>
                    </article>
                    <article className="w-72 md:w-80 h-80 md:h-96 bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-700 dark:to-zinc-800 rounded-2xl p-6 md:p-8 text-white shadow-2xl border border-zinc-700 dark:border-zinc-600 transition-colors duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-700 dark:bg-zinc-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300">
                        <Zap className="h-5 w-5 md:h-6 md:w-6 text-zinc-300" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Performance</h3>
                      <p className="text-zinc-300 text-sm md:text-base">Optimierte Websites für blitzschnelle Ladezeiten und beste UX.</p>
                    </article>
                  </CardSwap>
                </div>
              </ScrollFloat>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="bottom">
            <header className="text-center mb-12 md:mb-16">
              <BlurText 
                text="Unsere Services"
                className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300"
                delay={100}
                animateBy="words"
                direction="bottom"
              />
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Von der Konzeption bis zur Umsetzung - wir begleiten Sie durch den gesamten Entwicklungsprozess
              </p>
            </header>
          </ScrollReveal>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <ScrollReveal key={service.title} delay={index * 0.1} direction="bottom">
                  <motion.article
                    className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-gray-900/20 transition-all duration-300 group cursor-pointer h-full"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 md:w-12 md:h-12 bg-${service.color}-100 dark:bg-${service.color}-800 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className={`h-5 w-5 md:h-6 md:w-6 text-${service.color}-600 dark:text-${service.color}-300`} />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base transition-colors duration-300">
                      {service.description}
                    </p>
                  </motion.article>
                </ScrollReveal>
              )
            })}
          </motion.div>
          
          <ScrollReveal delay={0.5} direction="bottom">
            <div className="text-center mt-8 md:mt-12">
              <Link to="/services" aria-label="Alle Services ansehen - Detaillierte Übersicht">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                    Alle Services ansehen
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-white dark:bg-gray-900 transition-colors duration-300" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal direction="left">
              <article>
                <BlurText 
                  text="Über Hexacore Studio"
                  className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 md:mb-8 transition-colors duration-300"
                  delay={100}
                  animateBy="words"
                  direction="bottom"
                />
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed transition-colors duration-300">
                  Wir sind ein Team von leidenschaftlichen Entwicklern und Designern, die sich darauf spezialisiert haben, 
                  außergewöhnliche digitale Erlebnisse zu schaffen.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed transition-colors duration-300">
                  Mit jahrelanger Erfahrung in der Webentwicklung helfen wir Unternehmen dabei, ihre Online-Präsenz 
                  zu stärken und ihre Ziele zu erreichen.
                </p>
                <motion.div 
                  className="flex flex-wrap items-center gap-6 md:gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    { number: "50+", label: "Projekte" },
                    { number: "5+", label: "Jahre Erfahrung" },
                    { number: "100%", label: "Zufriedenheit" }
                  ].map((stat, index) => (
                    <ScrollReveal key={stat.label} delay={index * 0.1} direction="bottom">
                      <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{stat.number}</div>
                        <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 transition-colors duration-300">{stat.label}</div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </motion.div>
                
                <ScrollReveal delay={0.3} direction="bottom">
                  <div className="mt-6 md:mt-8">
                    <Link to="/about" aria-label="Mehr über uns erfahren - Unser Team und Philosophie">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="lg" variant="outline" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                          Mehr über uns
                          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </ScrollReveal>
              </article>
            </ScrollReveal>
            
            <ScrollFloat intensity={40} direction="right">
              <article className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 text-center border border-slate-200 dark:border-gray-600 transition-colors duration-300">
                <motion.div 
                  className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-slate-600 to-gray-700 dark:from-slate-500 dark:to-gray-600 rounded-2xl mx-auto mb-6 md:mb-8 flex items-center justify-center transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Star className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4 transition-colors duration-300">Qualität steht an erster Stelle</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base transition-colors duration-300">
                  Jedes Projekt wird mit höchster Sorgfalt und Aufmerksamkeit für Details entwickelt. 
                  Wir setzen auf moderne Standards und bewährte Praktiken.
                </p>
              </article>
            </ScrollFloat>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-12 md:py-20 px-4 md:px-6 bg-black dark:bg-gray-950 text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="bottom">
            <BlurText 
              text="Bereit für Ihr nächstes Projekt?"
              className="text-3xl md:text-5xl font-light mb-6 md:mb-8 text-white"
              delay={100}
              animateBy="words"
              direction="bottom"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="bottom">
            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400 mb-8 md:mb-12 leading-relaxed transition-colors duration-300">
              Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen. 
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="bottom">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" aria-label="Kostenlose Beratung anfragen">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto transition-colors duration-300">
                    Kostenlose Beratung
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/portfolio" aria-label="Portfolio ansehen - Unsere besten Arbeiten">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-gray-800 text-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-800 dark:border-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto transition-colors duration-300 font-medium">
                    Portfolio ansehen
                  </Button>
                </motion.div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </motion.section>
    </main>
  )
}

export default Home

