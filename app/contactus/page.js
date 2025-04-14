// app/contact/page.jsx
'use client'
import { motion } from 'framer-motion'
import { FiMail, FiMessageSquare, FiZap, FiSend } from 'react-icons/fi'
import Navbar from '@/components/Navbar'

export default function ContactPage() {
  const socials = [
    {
      platform: "Discord",
      handle: "join/no-cap-crew",
      icon: "👾",
      color: "bg-purple-500/20 hover:bg-purple-500/30"
    },
    {
      platform: "Twitter",
      handle: "@nocapstudios",
      icon: "🐦",
      color: "bg-blue-500/20 hover:bg-blue-500/30"
    },
    {
      platform: "Insta",
      handle: "@nocap.visuals",
      icon: "📸",
      color: "bg-pink-500/20 hover:bg-pink-500/30"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Floating emojis */}
      {['💬', '📱', '✉️', '🤙', '🔥', '🚀'].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            rotate: Math.random() * 360
          }}
          animate={{
            x: [null, (Math.random() - 0.5) * 50 + 'vw'],
            y: [null, (Math.random() - 0.5) * 50 + 'vh'],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Slide Into Our DMs
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We reply faster than rocket-launching (no cap)
          </p>
        </motion.section>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {/* Social Cards */}
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FiZap className="text-yellow-400" /> 
              <span>Find Us Online</span>
            </motion.h2>
            
            <div className="space-y-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className={`flex items-center gap-4 p-6 rounded-xl border border-gray-800 ${social.color} transition-colors`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-3xl">{social.icon}</span>
                  <div>
                    <div className="font-bold">{social.platform}</div>
                    <div className="text-gray-400">{social.handle}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FiMail className="text-blue-400" /> 
              <span>Drop Us a Line</span>
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="What should we call you?"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="no-reply@nocap.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Hit us with your best shot..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend /> Yeet This Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Meme Section */}
        <motion.section
          className="text-center mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-2xl border-2 border-dashed border-gray-700">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold mb-2">Emergency Meme Hotline</h3>
            <p className="text-gray-400 max-w-md">
              For urgent meme consultations only
            </p>
            <div className="mt-6 text-4xl font-mono">1-800-MEME-NOW</div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} No Cap Studios | All memes reserved</p>
      </footer>
    </div>
  )
}