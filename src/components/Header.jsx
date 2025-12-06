import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
      : 'bg-transparent'
  }`

  const textClasses = scrolled ? 'text-gray-900' : 'text-gray-900'
  const logoClasses = scrolled ? 'text-primary-600' : 'text-primary-600'

  return (
    <motion.header 
      className={headerClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`p-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 ${logoClasses}`}>
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold ${logoClasses}`}>Em 30</span>
              <span className="text-xs text-gray-500 font-medium">Emagrecimento Medicamentoso</span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`${textClasses} hover:text-primary-600 transition-colors duration-300 font-medium`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`${textClasses} hover:text-primary-600 transition-colors duration-300 font-medium`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('metodo')}
              className={`${textClasses} hover:text-primary-600 transition-colors duration-300 font-medium`}
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={`${textClasses} hover:text-primary-600 transition-colors duration-300 font-medium`}
            >
              Contato
            </button>
            <motion.a
              href="tel:(35) 99848-9503"
              className="flex items-center space-x-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4" />
              <span>(35) 99848-9503</span>
            </motion.a>
          </nav>

          <motion.button
            className={`md:hidden p-2 ${textClasses}`}
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-gray-900 hover:text-primary-600 transition-colors duration-300 font-medium py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-gray-900 hover:text-primary-600 transition-colors duration-300 font-medium py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('metodo')}
                className="block w-full text-left text-gray-900 hover:text-primary-600 transition-colors duration-300 font-medium py-2"
              >
                Método
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-gray-900 hover:text-primary-600 transition-colors duration-300 font-medium py-2"
              >
                Contato
              </button>
              <a
                href="tel:(35) 99848-9503"
                className="flex items-center space-x-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 w-fit"
              >
                <Phone className="h-4 w-4" />
                <span>(35) 99848-9503</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}