import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Shield, Target, Star, TrendingDown, Heart, Award } from 'lucide-react'

export default function Hero() {
  const benefits = [
    { icon: Target, text: "Resultados em 30 dias" },
    { icon: Shield, text: "Medicamentos aprovados pela ANVISA" },
    { icon: Heart, text: "Acompanhamento médico completo" },
    { icon: Award, text: "Método cientificamente comprovado" }
  ]

  const stats = [
    { number: "95%", label: "Taxa de sucesso" },
    { number: "12kg", label: "Perda média" },
    { number: "30", label: "Dias para resultado" },
    { number: "100%", label: "Seguro e natural" }
  ]

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-white via-primary-50 to-secondary-50 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="relative z-10 container-custom section-padding pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-100 to-accent-200 text-accent-700 px-6 py-3 rounded-full font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Star className="h-5 w-5" />
              <span>Método #1 em Emagrecimento Medicamentoso</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Perca até <span className="text-gradient">12kg</span> em{' '}
              <span className="text-gradient">30 dias</span> com{' '}
              <span className="text-gradient">segurança médica</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Descubra o método de emagrecimento medicamentoso que já transformou a vida de 
              milhares de pessoas. Com acompanhamento médico especializado e medicamentos 
              aprovados pela ANVISA, você finalmente alcançará seus objetivos de forma 
              <strong className="text-primary-600"> segura e definitiva</strong>.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-800">{benefit.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                className="btn-accent group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('', '_blank')}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <TrendingDown className="h-6 w-6" />
                  <span>COMEÇAR AGORA</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.div
                className="flex items-center space-x-3 text-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-5 w-5 text-primary-500" />
                <span className="text-sm font-medium">
                  ⚡ Últimas <strong className="text-accent-600">24 horas</strong> para garantir sua vaga
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
              whileInView={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-3xl"></div>
              
              <div className="relative space-y-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6">
                    <TrendingDown className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Transformação Garantida
                  </h3>
                  <p className="text-gray-600">
                    Mais de <strong>10.000 pessoas</strong> já perderam peso com segurança 
                    usando nosso método exclusivo
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Medicamentos liberados pela ANVISA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Acompanhamento médico 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Resultados em 30 dias ou menos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Suporte nutricional incluído</span>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6"
                  whileInView={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <span className="font-semibold text-green-800">Garantia Total</span>
                  </div>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Se você não perder pelo menos 5kg em 30 dias seguindo nossa orientação, 
                    devolvemos 100% do seu investimento.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full font-bold shadow-lg"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🔥 OFERTA LIMITADA
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}