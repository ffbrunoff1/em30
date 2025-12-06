import React from 'react'
import { motion } from 'framer-motion'
import { Users, Trophy, Heart, Shield, Clock, Target, TrendingDown, CheckCircle, Zap, Award } from 'lucide-react'

export default function About() {
  const problems = [
    "Dietas que não funcionam a longo prazo",
    "Falta de orientação médica especializada",
    "Métodos perigosos e sem comprovação científica",
    "Efeito sanfona constante",
    "Falta de acompanhamento profissional",
    "Produtos milagrosos que prometem e não entregam"
  ]

  const solutions = [
    { icon: Shield, title: "Medicamentos Aprovados", desc: "Apenas medicamentos com aprovação da ANVISA" },
    { icon: Users, title: "Equipe Especializada", desc: "Médicos especializados em emagrecimento" },
    { icon: Heart, title: "Acompanhamento 24h", desc: "Suporte médico durante todo o processo" },
    { icon: Target, title: "Resultados Garantidos", desc: "Método com 95% de taxa de sucesso" }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdeu 15kg",
      time: "em 28 dias",
      text: "Nunca imaginei que fosse possível perder peso de forma tão rápida e segura. O acompanhamento médico fez toda a diferença!"
    },
    {
      name: "João Santos",
      result: "Perdeu 22kg",
      time: "em 45 dias",
      text: "Tentei várias dietas antes, mas só consegui sucesso real com o método Em 30. Recomendo para todos!"
    },
    {
      name: "Ana Costa",
      result: "Perdeu 18kg",
      time: "em 35 dias",
      text: "O que mais me impressionou foi a segurança do tratamento. Perdi peso sem comprometer minha saúde."
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-100 to-accent-200 text-accent-700 px-6 py-3 rounded-full font-semibold mb-6"
            whileInView={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="h-5 w-5" />
            <span>A Verdade Sobre o Emagrecimento</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que 95% das <span className="text-gradient">dietas falham</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A indústria do emagrecimento está repleta de promessas vazias e métodos perigosos. 
            Descubra por que nosso método é diferente e cientificamente comprovado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-red-500 rounded-xl">
                  <TrendingDown className="h-6 w-6 text-white transform rotate-180" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">O PROBLEMA</h3>
              </div>
              <p className="text-red-700 font-medium mb-6">
                Você já passou por isso e sabe como é frustrante:
              </p>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-red-700 leading-relaxed">{problem}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-8 p-6 bg-red-200 rounded-xl border-l-4 border-red-500"
                whileInView={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-red-800 font-semibold">
                  💔 O resultado? Frustração, perda de dinheiro e problemas de saúde que 
                  poderiam ser evitados com o método correto.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-500 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">A SOLUÇÃO</h3>
              </div>
              <p className="text-green-700 font-medium mb-6">
                O Em 30 resolve todos esses problemas de uma vez:
              </p>
              <div className="space-y-6">
                {solutions.map((solution, index) => {
                  const IconComponent = solution.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 bg-white/70 rounded-xl p-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">{solution.title}</h4>
                        <p className="text-green-700 text-sm leading-relaxed">{solution.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                className="mt-8 p-6 bg-green-200 rounded-xl border-l-4 border-green-500"
                whileInView={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-green-800 font-semibold">
                  ✅ O resultado? Emagrecimento seguro, duradouro e com acompanhamento médico 
                  especializado em cada etapa do processo.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Veja os resultados <span className="text-gradient">reais</span> de quem já transformou a vida
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 10.000 pessoas já provaram que o método Em 30 funciona. 
            Agora é a sua vez de fazer parte dessa transformação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                <div className="text-2xl font-bold text-gradient">{testimonial.result}</div>
                <div className="text-primary-600 font-semibold">{testimonial.time}</div>
              </div>
              <p className="text-gray-600 leading-relaxed italic text-center">
                "{testimonial.text}"
              </p>
              <div className="flex justify-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                  >
                    <Award className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="btn-accent group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('', '_blank')}
          >
            <span className="flex items-center space-x-3">
              <Target className="h-6 w-6" />
              <span>QUERO MEUS RESULTADOS AGORA</span>
            </span>
          </motion.button>
          <p className="text-gray-500 text-sm mt-4">
            ⚡ Últimas horas para garantir o desconto especial
          </p>
        </motion.div>
      </div>
    </section>
  )
}