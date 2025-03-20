"use client"
// Custom backgrounds with animations
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Members() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const memberCategories = {
    head: [{ name: "Alex Johnson", role: "Chairperson", image: "/placeholder.svg?height=400&width=400" }],
    core: [
      { name: "Divyansh Goyal", role: "Vice Chairperson", image: "/placeholder.svg?height=400&width=400" },
      { name: "Tamanna", role: "Technical Lead", image: "/placeholder.svg?height=400&width=400" },
      { name: "Abhilasha", role: "Operations Head", image: "/placeholder.svg?height=400&width=400" },
      { name: "Mounika", role: "Marketing Lead", image: "/placeholder.svg?height=400&width=400" },
      { name: "Manroop", role: "Marketing Lead", image: "/placeholder.svg?height=400&width=400" },
    ],
    general: [
      { name: "Emma Davis", role: "Member", image: "/placeholder.svg?height=400&width=400" },
      { name: "Raj Patel", role: "Member", image: "/placeholder.svg?height=400&width=400" },
      { name: "Sophia Lee", role: "Member", image: "/placeholder.svg?height=400&width=400" },
      { name: "James Brown", role: "Member", image: "/placeholder.svg?height=400&width=400" },
      { name: "Aisha Khan", role: "Member", image: "/placeholder.svg?height=400&width=400" },
      { name: "Carlos Rodriguez", role: "Member", image: "/placeholder.svg?height=400&width=400" },
    ],
  }

  return (
    <section id="members" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Our Team
          </h2>
          <p className="text-lg text-gray-300">
            Meet the dedicated individuals who work tirelessly to create opportunities for students
          </p>
        </motion.div>

        <Tabs defaultValue="head" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg">
            <TabsTrigger
              value="head"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
            >
              Head
            </TabsTrigger>
            <TabsTrigger
              value="core"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
            >
              Core Members
            </TabsTrigger>
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
            >
              General Members
            </TabsTrigger>
          </TabsList>

          <TabsContent value="head">
            <div className="flex justify-center">
              <MemberCard member={memberCategories.head[0]} index={0} isInView={isInView} featured />
            </div>
          </TabsContent>

          <TabsContent value="core">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {memberCategories.core.map((member, index) => (
                <MemberCard key={index} member={member} index={index} isInView={isInView} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="general">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {memberCategories.general.map((member, index) => (
                <MemberCard key={index} member={member} index={index} isInView={isInView} small />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function MemberCard({ member, index, isInView, featured = false, small = false }) {
  return (
    <motion.div
      className={`${featured ? "max-w-sm" : small ? "w-full" : "w-full"} bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.1 * index, duration: 0.8 }}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-square relative">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className={`p-4 ${small ? "text-center" : "text-center"}`}>
        <h3 className={`${featured ? "text-xl" : small ? "text-base" : "text-lg"} font-bold text-white mb-1`}>
          {member.name}
        </h3>
        <p className="text-purple-400 text-sm">{member.role}</p>
      </div>
    </motion.div>
  )
}

