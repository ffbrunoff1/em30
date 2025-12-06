import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    weight: '',
    goal: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ message: '', isError: false })

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: "gabrielsilvasantos3010@gmail.com",
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ 
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 
          isError: false 
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          weight: '',
          goal: '',
          message: ''
        })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo telefone.', 
        isError: true 
      })
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      content: "(35) 99848-9503",
      link: "tel:(35) 99848-9503"
    },
    {
      icon: Mail,
      title: "Email",
      content: "gabrielsilvasantos3010@gmail.com", 
      link: "mailto:gabrielsilvasantos3010@gmail.com"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h"
    },
    {
      icon: MapPin,
      title: "Atendimento",
      content: "Consulta médica online\ne presencial"
    }
  ]

  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-white to-gray-50">
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
            <Phone className="h-5 w-5" />
            <span>Entre em Contato Conosco</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pronto para <span className="text-gradient">transformar sua vida</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe médica especializada está pronta para ajudar você a alcançar seus objetivos. 
            Entre em contato e comece sua jornada rumo ao corpo dos seus sonhos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 border border-accent-200"
              whileInView={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent-600" />
                <h4 className="text-xl font-bold text-accent-800">Primeira Consulta Gratuita</h4>
              </div>
              <p className="text-accent-700 leading-relaxed">
                Agende sua consulta médica inicial sem compromisso. Nossos especialistas 
                avaliarão seu caso e explicarão como o método Em 30 pode ajudar você a 
                alcançar seus objetivos de forma segura e eficaz.
              </p>
              <motion.a
                href="tel:(35) 99848-9503"
                className="inline-flex items-center space-x-2 bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-accent-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Agendar Consulta</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite Informações</h3>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato para esclarecer 
                suas dúvidas e avaliar se você é candidato ao método Em 30.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Idade
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="30"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Peso Atual (kg)
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="75"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta de Emagrecimento
                  </label>
                  <input
                    type="text"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Ex: Perder 10kg para me sentir melhor"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem Adicional
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Conte-nos mais sobre seus objetivos e histórico de tentativas anteriores..."
                  ></textarea>
                </motion.div>

                {status.message && (
                  <motion.div
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      status.isError 
                        ? 'bg-red-50 border border-red-200 text-red-700' 
                        : 'bg-green-50 border border-green-200 text-green-700'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {status.isError ? (
                      <AlertCircle className="h-5 w-5" />
                    ) : (
                      <CheckCircle className="h-5 w-5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white hover:shadow-xl hover:scale-105 active:scale-95'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Solicitar Informações'}</span>
                </motion.button>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  size="invisible"
                />
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}