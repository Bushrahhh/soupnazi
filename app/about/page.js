// app/about/page.jsx
'use client';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiTwitter, FiInstagram } from 'react-icons/fi';
import Navbar from '@/components/Navbar'; // Make sure this path matches your structure

export default function AboutPage() {
  const values = [
    {
      title: "Zero Cringe Policy",
      description: "We keep it authentic - no corporate jargon, just real talk",
      emoji: "🚫"
    },
    {
      title: "Big Main Character Energy",
      description: "Every project gets our undivided slay",
      emoji: "✨"
    },
    {
      title: "Vibes Over Everything",
      description: "Good energy = good work. It's that simple",
      emoji: "🧘"
    }
  ];

  const perks = [
    {
      title: "Flexible AF",
      description: "WFH? Coffee shop? Moon base? You do you",
      icon: "💻"
    },
    {
      title: "Unlimited PTO",
      description: "Touch grass whenever you need",
      icon: "🏝️"
    },
    {
      title: "Learning Stipend",
      description: "Level up on our dime",
      icon: "📚"
    },
    {
      title: "Dank Meme Fridays",
      description: "Mandatory meme sharing. No exceptions",
      icon: "😂"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar - Make sure you've created this component */}
      <Navbar />

      {/* Floating emojis background */}
      {['✨', '🔥', '🚀', '💯', '👾', '🦄', '🌈', '🍕'].map((emoji, i) => (
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
        {/* Hero Section */}
        <motion.section 
          className="mb-28 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              No Cap, Just Facts
            </span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're the digital rebels turning "that'd be cool" into "holy shit they actually did it"
          </p>
        </motion.section>

        {/* Origin Story */}
        <motion.section 
          className="grid md:grid-cols-2 gap-16 mb-32 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 rounded-2xl h-64 md:h-96 border border-gray-800 hover:border-blue-500 transition-colors"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ rotate: -1 }}
          />
          
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our <span className="text-blue-400">Origin Story</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Back in 2018, three sleep-deprived homies in a dorm room said "screw normal" and started building wild digital experiences.
            </motion.p>
            <motion.p
              className="text-gray-400 mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Fast forward to today - we're still that same chaotic energy, just with more clients, more skills, and way better coffee.
            </motion.p>
            <motion.button
              className="flex items-center gap-2 text-purple-400 group"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Read our full lore
              <FiArrowRight className="group-hover:translate-x-1 transition-all" />
            </motion.button>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section className="mb-32">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span className="text-purple-400">Vibe Check</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-6">{value.emoji}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Perks Section */}
        <motion.section className="mb-32 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-12 border border-gray-800">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why <span className="text-blue-400">Join Us</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-3xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-gray-400 text-sm">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="mb-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Clients <span className="text-pink-400">Say We're</span> 🥵
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              "These guys built our app in 3 weeks when others said it'd take 3 months",
              "Never worked with a team that gets our vision so quickly",
              "They somehow made our boring SaaS product look cool"
            ].map((quote, i) => (
              <motion.div
                key={i}
                className="p-8 bg-gray-900 rounded-xl border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-yellow-400 text-2xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="italic text-gray-300">"{quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">
            Still <span className="text-purple-400">Reading</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Hit us up already! We don't bite (unless you're into that)
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <motion.a
              href="#"
              className="flex items-center gap-2 px-6 py-4 bg-blue-600 rounded-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiMail /> Work With Us
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-2 px-6 py-4 bg-purple-600 rounded-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiTwitter /> Follow Our Chaos
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-2 px-6 py-4 bg-pink-600 rounded-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiInstagram /> See Our Aesthetic
            </motion.a>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 text-center text-gray-500">
        <div className="flex justify-center gap-6 mb-6">
          {['💅', '👀', '🤙', '🙌', '😤'].map((emoji, i) => (
            <span key={i} className="text-2xl">{emoji}</span>
          ))}
        </div>
        <p>© {new Date().getFullYear()} No Cap Studios | All Rights Reserved (unless you ask nicely)</p>
      </footer>
    </div>
  );
}