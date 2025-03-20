"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const events = [
    {
      title: "Annual Placement Drive 2023",
      date: "November 15-20, 2023",
      location: "LPU Campus, Block 32",
      time: "9:00 AM - 5:00 PM",
      description: "Our flagship event featuring 50+ companies offering roles across various domains.",
      isPast: true,
      image: "/placeholder.svg?height=400&width=400" // Add image path
    },
    {
      title: "Resume Building Workshop",
      date: "December 5, 2023",
      location: "Online (Zoom)",
      time: "2:00 PM - 4:00 PM",
      description: "Learn how to craft an impressive resume that stands out to recruiters.",
      isPast: true,
      image: "/placeholder.svg?height=400&width=400" // Add image path
    },
    {
      title: "Mock Interview Sessions",
      date: "January 10-12, 2024",
      location: "LPU Campus, Block 28",
      time: "10:00 AM - 4:00 PM",
      description: "Practice your interview skills with industry professionals and receive feedback.",
      isPast: false,
      image: "/placeholder.svg?height=400&width=400" // Add image path
    },
    {
      title: "Tech Career Fair",
      date: "February 20, 2024",
      location: "LPU Auditorium",
      time: "11:00 AM - 6:00 PM",
      description: "Connect with leading tech companies and explore internship and job opportunities.",
      isPast: false,
      image: "/placeholder.svg?height=400&width=400" // Add image path
    },
  ]

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Events
          </h2>
          <p className="text-lg text-gray-300">
            Discover our past and upcoming events designed to enhance your career prospects
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hidden md:block" />
                    
                    {event.image && (
                      <div className="mb-4">
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg" />
                      </div>
                    )}

                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${event.isPast ? "bg-gray-700 text-gray-300" : "bg-purple-500/20 text-purple-400"}`}
                      >
                        {event.isPast ? "Past Event" : "Upcoming"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>

                    <div className="space-y-2 mb-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-purple-400" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

