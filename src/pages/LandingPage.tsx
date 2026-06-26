import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Zap, Users, LucideIcon } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import ParticleBackground from '../components/ui/ParticleBackground'
import AuroraBackground from '../components/ui/AuroraBackground'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface Stat {
  label: string
  value: number
  suffix: string
}

interface WhyChooseItem {
  title: string
  description: string
}

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const LandingPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features: Feature[] = [
    {
      icon: TrendingUp,
      title: 'Smart Portfolio Growth',
      description: 'AI-powered recommendations that adapt to your financial goals and market conditions.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment tools to ensure your investments align with your comfort level.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Real-time analytics and instant transaction processing for modern investors.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Access to premium fund managers and investment advisors at your fingertips.',
    },
  ]

  const stats: Stat[] = [
    { label: 'Active Investors', value: 50000, suffix: '+' },
    { label: 'AUM Managed', value: 10000, suffix: 'Cr' },
    { label: 'Funds Available', value: 150, suffix: '+' },
    { label: 'Years Experience', value: 25, suffix: '+' },
  ]

  const whyChooseItems: WhyChooseItem[] = [
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees. Clear, competitive expense ratios across all funds.',
    },
    {
      title: 'Award Winning',
      description: 'Recognized excellence in fund management and investor service.',
    },
    {
      title: 'Digital First',
      description: 'State-of-the-art technology platform for seamless investing.',
    },
    {
      title: 'Consistent Returns',
      description: 'Long-term wealth creation through disciplined investment strategies.',
    },
    {
      title: 'Customer Centric',
      description: '24/7 support with dedicated relationship managers for your needs.',
    },
    {
      title: 'ESG Committed',
      description: 'Sustainable investing options aligned with your values.',
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <AuroraBackground />
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 mb-8 glass-effect px-6 py-3 rounded-full"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-semibold">Welcome to Premium Investing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Invest with </span>
            <span className="gradient-text">Conviction</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience the future of wealth management with PPFAS. Intelligent investing powered by data, guided by expertise, designed for your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button size="lg" variant="primary" className="group">
              Start Investing
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl hover-scale"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-emerald-500 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Powerful Features </span>
              <span className="gradient-text">for Modern Investors</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with professional expertise.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <GlassCard key={feature.title} delay={index * 0.1} className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </GlassCard>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose PPFAS Section */}
      <section id="why-ppfas" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Why Choose PPFAS?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trusted by thousands of investors for delivering consistent value and exceptional service.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group"
              >
                <GlassCard delay={index * 0.05} className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="strong" className="p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold mb-6"
              >
                <span className="text-white">Ready to Start Your </span>
                <span className="gradient-text">Investment Journey?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
              >
                Join thousands of investors who are building wealth with PPFAS. Get started in minutes with our intuitive platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button size="lg" variant="primary" className="group">
                  Open Account Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="secondary">
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
