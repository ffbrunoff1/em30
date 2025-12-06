import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Phone, Mail, Heart, Shield } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Sobre o Em 30",
      links: [
        { name: "Como Funciona", href: "#metodo" },
        { name: "Resultados", href: "#sobre" },
        { name: "Segurança", href: "#metodo" }
      ]
    },
    {
      title: "Atendimento",
      links: [
        { name: "Contato", href: "#contato" },
        { name: "WhatsApp", href: "tel:(35) 99848-9503" },
        { name: "Email", href: "mailto:gabrielsilvasantos3010@gmail.com" }
      ]
    }
  ]

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(sectionId, '_blank')
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pb-20">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">Em 30</span>
                <span className="text-sm text-gray-400 font-medium">Emagrecimento Medicamentoso</span>
              </div>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transformando vidas através do emagrecimento seguro e medicamentoso. 
              Com acompanhamento médico especializado, ajudamos você a alcançar seus 
              objetivos de forma definitiva e saudável.
            </p>

            <motion.div
              className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
              whileInView={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="h-6 w-6 text-primary-400" />
              <div>
                <div className="font-semibold text-primary-300">Medicamentos Aprovados ANVISA</div>
                <div className="text-sm text-gray-400">Segurança e eficácia comprovadas</div>
              </div>
            </motion.div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.button
                    key={linkIndex}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-400" />
                <span>© {currentYear} Em 30. Todos os direitos reservados.</span>
              </div>
              
              <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
              
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Criado com <em className="text-primary-400">Papum</em>
              </motion.a>
            </div>

            <div className="flex items-center space-x-6">
              <motion.a
                href="tel:(35) 99848-9503"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(35) 99848-9503</span>
              </motion.a>

              <motion.a
                href="mailto:gabrielsilvasantos3010@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email</span>
              </motion.a>
            </div>
          </div>

          <motion.div
            className="mt-6 p-4 bg-gradient-to-r from-primary-900/20 to-accent-900/20 rounded-lg border border-primary-800/30"
            whileInView={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-xs text-gray-400 leading-relaxed text-center">
              <strong className="text-primary-300">Aviso Importante:</strong> Os resultados podem variar de pessoa para pessoa. 
              O Em 30 é um método de emagrecimento medicamentoso que deve ser realizado sob supervisão médica. 
              Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}