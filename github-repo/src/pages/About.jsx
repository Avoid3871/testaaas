import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Star, Users, Award, Target, Heart, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
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

  const values = [
    {
      icon: Star,
      title: "Qualität",
      description: "Wir setzen auf höchste Qualitätsstandards in jedem Projekt und verwenden nur bewährte Technologien."
    },
    {
      icon: Users,
      title: "Zusammenarbeit",
      description: "Enge Zusammenarbeit mit unseren Kunden steht im Mittelpunkt unserer Arbeitsweise."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Wir bleiben immer am Puls der Zeit und setzen innovative Lösungen für Ihre Herausforderungen ein."
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Leidenschaft für Webentwicklung und Design treibt uns an, außergewöhnliche Ergebnisse zu erzielen."
    }
  ]

  const team = [
    {
      name: "Alex Müller",
      role: "Founder & Lead Developer",
      description: "10+ Jahre Erfahrung in der Webentwicklung mit Fokus auf React und moderne Frontend-Technologien.",
      skills: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      name: "Sarah Weber",
      role: "UI/UX Designer",
      description: "Spezialistin für benutzerfreundliche Designs und moderne Benutzeroberflächen.",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
    },
    {
      name: "Tom Schmidt",
      role: "Backend Developer",
      description: "Experte für skalierbare Backend-Lösungen und API-Entwicklung.",
      skills: ["Python", "PostgreSQL", "Docker", "Microservices"]
    }
  ]

  const stats = [
    { number: "50+", label: "Erfolgreiche Projekte", description: "Websites und Anwendungen für zufriedene Kunden" },
    { number: "5+", label: "Jahre Erfahrung", description: "Kontinuierliche Weiterentwicklung und Lernen" },
    { number: "100%", label: "Kundenzufriedenheit", description: "Alle Kunden würden uns weiterempfehlen" },
    { number: "24/7", label: "Support", description: "Wir sind immer für unsere Kunden da" }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-light text-gray-900 dark:text-white mb-8 leading-tight">
                Über
                <br />
                <span className="font-semibold">Hexacore Studio</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Wir sind ein leidenschaftliches Team von Entwicklern und Designern, 
                das sich darauf spezialisiert hat, außergewöhnliche digitale Erlebnisse zu schaffen.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Seit unserer Gründung haben wir uns darauf konzentriert, innovative Lösungen zu entwickeln, 
                die nicht nur technisch exzellent sind, sondern auch echten Mehrwert für unsere Kunden schaffen.
              </p>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
                    Projekt besprechen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-3xl p-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-8 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Target className="h-12 w-12 text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Unsere Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Wir verwandeln Ihre digitalen Visionen in beeindruckende Realität. 
                  Durch die Kombination von modernster Technologie und kreativem Design 
                  schaffen wir Lösungen, die Ihre Zielgruppe begeistern.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Unsere <span className="font-semibold">Werte</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun, und helfen uns dabei, 
              außergewöhnliche Ergebnisse für unsere Kunden zu erzielen.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="text-center group"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Unser <span className="font-semibold">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Lernen Sie die kreativen Köpfe hinter Hexacore Studio kennen. 
              Jeder bringt einzigartige Fähigkeiten und Leidenschaft mit.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-8">
                Unsere <span className="font-semibold">Geschichte</span>
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hexacore Studio wurde 2019 mit der Vision gegründet, die Lücke zwischen 
                  technischer Exzellenz und kreativem Design zu schließen. Was als kleines 
                  Team von zwei Entwicklern begann, ist heute ein etabliertes Studio mit 
                  einem vielfältigen Portfolio.
                </p>
                <p>
                  Unser Name "Hexacore" spiegelt unsere Philosophie wider: Wie ein Sechskern-Prozessor 
                  arbeiten wir effizient, parallel und mit maximaler Performance. Jedes Projekt 
                  profitiert von unserer kollektiven Expertise und unserem Engagement für Perfektion.
                </p>
                <p>
                  Heute sind wir stolz darauf, Unternehmen aller Größen dabei zu helfen, 
                  ihre digitalen Ziele zu erreichen. Von Startups bis hin zu etablierten 
                  Unternehmen - wir bringen die gleiche Leidenschaft und Professionalität 
                  in jedes Projekt ein.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-500 space-y-10 mt-12">
                {[{year: "2019", title: "Gründung", description: "Hexacore Studio wird von zwei Entwicklern mit einer gemeinsamen Vision gegründet."},
                  {year: "2020", title: "Erstes Büro", description: "Umzug in unser erstes eigenes Büro und Erweiterung des Teams."},
                  {year: "2022", title: "Expansion", description: "Erweiterung des Dienstleistungsangebots und Verdoppelung der Teamgröße."}].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <div className="absolute -left-[41px] h-7 w-7 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 z-10"></div>
                    <div className="mb-1 text-sm text-blue-600 dark:text-blue-400 font-semibold">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <Award className="h-8 w-8 mb-4" />
                  <h4 className="font-semibold mb-2">Auszeichnungen</h4>
                  <p className="text-sm text-blue-100">Mehrfach ausgezeichnet für herausragende Webprojekte</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <Users className="h-8 w-8 mb-4" />
                  <h4 className="font-semibold mb-2">Community</h4>
                  <p className="text-sm text-green-100">Aktive Teilnahme an der Entwickler-Community</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                  <Lightbulb className="h-8 w-8 mb-4" />
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-purple-100">Ständige Weiterentwicklung und neue Technologien</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                  <Heart className="h-8 w-8 mb-4" />
                  <h4 className="font-semibold mb-2">Leidenschaft</h4>
                  <p className="text-sm text-orange-100">Liebe zum Detail und Perfektion in jedem Projekt</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6 bg-black text-white dark:bg-gray-950"
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
            Werden Sie Teil unserer <span className="font-semibold">Erfolgsgeschichte</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lassen Sie uns gemeinsam Ihr nächstes digitales Projekt verwirklichen. 
            Wir freuen uns darauf, Sie kennenzulernen und Ihre Vision zum Leben zu erwecken.
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
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/portfolio">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black px-8 py-4 text-lg dark:border-blue-500 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white">
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

export default About

