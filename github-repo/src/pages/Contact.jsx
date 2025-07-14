import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    projectType: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      content: "hello@hexacore-studio.de",
      description: "Schreiben Sie uns eine E-Mail"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 123 456 789",
      description: "Rufen Sie uns an"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Musterstraße 123, 10115 Berlin",
      description: "Besuchen Sie unser Studio"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Mo-Fr: 9:00 - 18:00",
      description: "Wir sind für Sie da"
    }
  ]

  const projectTypes = [
    "Website Redesign",
    "Neue Website",
    "E-Commerce Shop",
    "Web Application",
    "Mobile App",
    "Branding & Design",
    "SEO Optimierung",
    "Wartung & Support"
  ]

  const budgetRanges = [
    "< 5.000€",
    "5.000€ - 10.000€",
    "10.000€ - 25.000€",
    "25.000€ - 50.000€",
    "> 50.000€"
  ]

  const [showSuccess, setShowSuccess] = useState(false)

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Vielen Dank!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-black dark:bg-blue-600 text-white hover:bg-gray-800 dark:hover:bg-blue-700"
          >
            Neue Nachricht senden
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-light text-gray-900 dark:text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Kontakt
            <br />
            <motion.span 
              className="font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              aufnehmen
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen. 
            Wir freuen uns darauf, Ihre Ideen zum Leben zu erwecken.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={info.title}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                  <p className="text-gray-900 dark:text-white font-medium mb-2">{info.content}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6">
              Projekt <span className="font-semibold">starten</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Erzählen Sie uns von Ihrem Projekt. Je mehr Details Sie uns geben, 
              desto besser können wir Ihnen helfen.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  Unternehmen
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Ihr Unternehmen"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  Projekttyp
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Bitte wählen</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="dark:bg-gray-700">{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Bitte wählen</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="dark:bg-gray-700">{range}</option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Projektbeschreibung *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Beschreiben Sie Ihr Projekt, Ihre Ziele und Anforderungen..."
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-black dark:bg-blue-600 text-white hover:bg-gray-800 dark:hover:bg-blue-700 px-8 py-4 text-lg"
              >
                Nachricht senden
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6">
              Häufige <span className="font-semibold">Fragen</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hier finden Sie Antworten auf die am häufigsten gestellten Fragen.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                question: "Wie lange dauert ein typisches Projekt?",
                answer: "Die Projektdauer hängt vom Umfang ab. Eine einfache Website dauert 2-4 Wochen, komplexere Projekte 6-12 Wochen. Wir erstellen einen detaillierten Zeitplan nach der ersten Beratung."
              },
              {
                question: "Wie läuft die Zusammenarbeit ab?",
                answer: "Wir arbeiten agil und transparent. Sie erhalten regelmäßige Updates und können jederzeit Feedback geben. Wir nutzen moderne Tools für die Kommunikation und Projektmanagement."
              },
              {
                question: "Bieten Sie auch Wartung und Support an?",
                answer: "Ja, wir bieten umfassende Wartungs- und Support-Pakete an. Diese umfassen Updates, Sicherheitspatches, Backups und technischen Support."
              },
              {
                question: "Können Sie bei der Suchmaschinenoptimierung helfen?",
                answer: "Absolut! SEO ist ein integraler Bestandteil unserer Webentwicklung. Wir optimieren Ihre Website von Grund auf für Suchmaschinen und bieten auch laufende SEO-Services an."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6 bg-black dark:bg-gray-900 text-white"
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
            Bereit für den <span className="font-semibold">nächsten Schritt?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lassen Sie uns bei einem kostenlosen Beratungsgespräch über Ihr Projekt sprechen. 
            Wir freuen uns darauf, Ihre Vision zu verwirklichen.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:hello@hexacore-studio.de"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-black dark:bg-blue-600 dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 px-8 py-4 text-lg">
                E-Mail schreiben
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </motion.a>
            <motion.a
              href="tel:+49123456789"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-white px-8 py-4 text-lg">
                Anrufen
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact

