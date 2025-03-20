"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Award, Briefcase } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "Students Placed" },
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Partner Companies" },
    { icon: <Briefcase className="h-6 w-6" />, value: "100+", label: "Events Organized" },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            About SPC
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            The Student Placement Committee (SPC) at Lovely Professional University is dedicated to bridging the gap
            between students and industry. We facilitate career opportunities, provide training, and organize placement
            drives to ensure our students are well-prepared for their professional journeys.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-purple-500/20 p-3 rounded-full text-purple-400">{stat.icon}</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

