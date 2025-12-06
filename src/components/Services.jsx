import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Users, Award, CheckCircle, Star, TrendingDown, Heart, Zap, Target, Phone, ChevronDown, ChevronUp } from 'lucide-react'

export default function Services() {
  const [activeStep, setActiveStep] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  const methodSteps = [
    {
      title: "Avaliação Médica Completa",
      description: "Análise detalhada do seu histórico médico e objetivos",
      duration: "1-2 dias",
      icon: Shield,
      details: [
        "Consulta médica especializada",
        "Exames laboratoriais personalizados",
        "Avaliação de contraindicações",
        "Definição de metas realistas"
      ]
    },
    {
      title: "Prescrição Personalizada",
      description: "Medicamento específico para seu perfil e necessidades",
      duration: "Mesmo dia",
      icon: Target,
      details: [
        "Medicamentos aprovados pela ANVISA",
        "Dosagem personalizada",
        "Orientações de uso detalhadas",
        "Cronograma de acompanhamento"
      ]
    },
    {
      title: "Acompanhamento Diário",
      description: "Monitoramento contínuo dos seus resultados",
      duration: "30 dias",
      icon: Heart,
      details: [
        "Consultas de acompanhamento",
        "Ajustes na medicação quando necessário",
        "Suporte nutricional",
        "Acompanhamento de efeitos colaterais"
      ]
    },
    {
      title: "Resultado Garantido",
      description: "Perda de peso segura e duradoura",
      duration: "Para sempre",
      icon: Award,
      details: [
        "Perda média de 8-12kg",
        "Manutenção do peso alcançado",
        "Orientações para vida saudável",
        "Suporte contínuo pós-tratamento"
      ]
    }
  ]

  const guarantees = [
    { icon: Shield, title: "Medicamentos Aprovados", desc: "Apenas medicamentos com registro na ANVISA" },
    { icon: Users, title: "Médicos Especialistas", desc: "Profissionais com experiência comprovada" },
    { icon: Clock, title: "Resultados Rápidos", desc: "Primeiros resultados em 7-10 dias" },
    { icon: Star, title: "Taxa de Sucesso", desc: "95% dos pacientes alcançam seus objetivos" }
  ]

  const bonuses = [
    {
      title: "Plano Nutricional Personalizado",
      value: "R$ 497",
      description: "Cardápio exclusivo desenvolvido por nutricionista especializada"
    },
    {
      title: "App de Acompanhamento",
      value: "R$ 297", 
      description: "Aplicativo para monitorar progresso e receber orientações diárias"
    },
    {
      title: "Grupo VIP de Suporte",
      value: "R$ 197",
      description: "Acesso ao grupo exclusivo com outros pacientes e profissionais"
    },
    {
      title: "Consultoria Pós-Tratamento",
      value: "R$ 397",
      description: "3 consultas extras para manter o peso alcançado"
    }
  ]

  const faqs = [
    {
      question: "O método Em 30 é seguro?",
      answer: "Sim, completamente seguro. Utilizamos apenas medicamentos aprovados pela ANVISA com acompanhamento médico rigoroso durante todo o tratamento."
    },
    {
      question: "Quantos quilos vou perder?",
      answer: "A perda média é de 8-12kg em 30 dias, mas pode variar conforme seu perfil. Nossa garantia mínima é de 5kg seguindo corretamente as orientações."
    },
    {
      question: "Tenho alguma garantia?",
      answer: "Oferecemos garantia total: se você não perder pelo menos 5kg em 30 dias seguindo nossas orientações, devolvemos 100% do investimento."
    },
    {
      question: "Quem pode fazer o tratamento?",
      answer: "Adultos saudáveis entre 18-65 anos. Fazemos avaliação médica completa para garantir que o método é adequado para você."
    },
    {
      question: "E depois dos 30 dias?",
      answer: "Oferecemos suporte contínuo para manutenção do peso. Muitos pacientes continuam perdendo peso após o período inicial."
    }
  ]

  const totalBonusValue = bonuses.reduce((total, bonus) => {
    return total + parseInt(bonus.value.replace('R$ ', ''))
  }, 0)

  return (
    <section id="metodo" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 px-6 py-3 rounded-full font-semibold mb-6"
            whileInView={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="h-5 w-5" />
            <span>Método Científico Comprovado</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como funciona o <span className="text-gradient">Método Em 30</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples, seguro e eficaz que já transformou a vida de milhares de pessoas. 
            Veja como você também pode alcançar seus objetivos em apenas 4 etapas.
          </p>
        </motion.div>

        <div className="mb-20">
          <div className="grid lg:grid-cols-4 gap-8">
            {methodSteps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = activeStep === index
              
              return (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 ${isActive ? 'lg:scale-105' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 ${
                    isActive ? 'border-primary-500 shadow-2xl' : 'border-gray-200 hover:border-primary-300'
                  }`}>
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse-slow' 
                          : 'bg-gray-100'
                      }`}>
                        <IconComponent className={`h-8 w-8 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      </div>
                      <div className={`text-sm font-semibold px-3 py-1 rounded-full mb-3 ${
                        isActive ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        Etapa {index + 1} • {step.duration}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1, duration: 0.3 }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  
                  {index < methodSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center card-hover border border-gray-100"
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm">{guarantee.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-12 mb-20 border border-primary-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full font-semibold mb-6"
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Star className="h-5 w-5" />
              <span>BÔNUS EXCLUSIVOS</span>
            </motion.div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Receba <span className="text-gradient">R$ {totalBonusValue.toLocaleString()}</span> em bônus
            </h3>
            <p className="text-xl text-gray-600">
              Além do método principal, você recebe todo esse conteúdo adicional sem custo extra
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{bonus.title}</h4>
                    <p className="text-gray-600 text-sm">{bonus.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">{bonus.value}</div>
                    <div className="text-xs text-gray-500 line-through">Valor normal</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-green-600 font-semibold">
                  <CheckCircle className="h-5 w-5" />
                  <span>INCLUÍDO GRATUITAMENTE</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </button>
                
                {openFaq === index && (
                  <motion.div
                    className="px-8 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              🔥 Última Chance - Oferta Especial
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Esta é sua oportunidade de transformar sua vida. Não deixe para amanhã 
              o que pode começar hoje mesmo!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <motion.button
                className="bg-white text-accent-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('', '_blank')}
              >
                QUERO COMEÇAR AGORA
              </motion.button>
              
              <motion.a
                href="tel:(35) 99848-9503"
                className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-accent-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>TIRAR DÚVIDAS</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}