// app/page.jsx
'use client';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiUsers, FiCode, FiZap } from 'react-icons/fi';
import Navbar from '@/components/Navbar';

export default function Home() {
  const team = [
    {
      name: "Alex 'The Vision' Chen",
      role: "CEO & Chief Vibe Officer",
      bio: "10+ years turning lit ideas into reality",
      emoji: "👑",
      delay: 0.1
    },
    {
      name: "Jamie 'Pixel Queen' Rivera",
      role: "Design Overlord",
      bio: "Makes UIs so clean they spark joy",
      emoji: "🎨",
      delay: 0.2
    },
    {
      name: "Taylor 'Code Beast' Smith",
      role: "Tech Wizard",
      bio: "Types at the speed of light",
      emoji: "💻",
      delay: 0.3
    }
  ];

  const stats = [
    { value: "2018", label: "Since we started flexin'", icon: <FiAward className="text-purple-400" /> },
    { value: "50+", label: "Squad members", icon: <FiUsers className="text-pink-400" /> }, 
    { value: "∞", label: "Dank memes shared", icon: <FiZap className="text-blue-400" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar Component */}
      <Navbar />

      {/* Floating emojis */}
      {['✨', '🔥', '🚀', '💯', '👾', '🦄'].map((emoji, i) => (
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

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              We Built Different
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            No cap - we're out here creating the most fire digital experiences
          </p>
        </motion.section>

        {/* Story */}
        <motion.section 
          className="grid md:grid-cols-2 gap-16 mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our <span className="text-purple-400">Vibe</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Started in a dorm room, now we're out here working with global brands. 
              We keep it 💯 - no corporate BS, just dope creations and good times.
            </motion.p>
            <motion.button
              className="flex items-center gap-2 text-pink-400 group"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Peep our work
              <FiArrowRight className="group-hover:translate-x-1 transition-all" />
            </motion.button>
          </div>

          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-2xl h-64 md:h-96 border border-gray-800 hover:border-pink-500 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 1 }}
          />
        </motion.section>

        {/* Stats */}
        <motion.section 
          className="grid md:grid-cols-3 gap-8 mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Team */}
        <motion.section className="mb-32">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet the <span className="text-pink-400">Squad</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="p-8 bg-gray-900 rounded-xl border border-gray-800 hover:border-pink-500 transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: member.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-6">{member.emoji}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                  {member.name}
                </h3>
                <div className="text-purple-400 mb-4">{member.role}</div>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">
            Wanna <span className="text-purple-400">collab</span>?
          </h2>
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Slide into our DMs</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} No Cap Studios</p>
      </footer>
    </div>
  );
}