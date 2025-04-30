"use client"
// Custom backgrounds with animations
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Members() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const memberCategories = {
    head: [{ 
      name: "Souhardya Bose", 
      role: "HEAD", 
      image: "/BoseBhaiya.jpeg", 
      bio: "Club head with expertise in machine learning and AI. Leads the team with passion and dedication.",
      expertise: ["Machine Learning", "AI", "Leadership", "Project Management"]
    }],
    core: [
      { 
        name: "Divyansh Goyal", 
        role: "Vice Chairperson", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Manages club operations and coordinates with different teams.",
        expertise: ["Team Coordination", "Event Management", "Communication", "Leadership"] 
      },
      { 
        name: "Tamanna", 
        role: "Technical Lead", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Oversees all technical projects and workshops within the club.",
        expertise: ["Technical Planning", "Workshop Facilitation", "Programming", "System Design"] 
      },
      { 
        name: "Abhilasha", 
        role: "Operations Head", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Ensures smooth running of events and manages logistics.",
        expertise: ["Operations", "Logistics", "Event Planning", "Resource Management"] 
      },
      { 
        name: "Mounika", 
        role: "Marketing Lead", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Handles club promotion and social media presence.",
        expertise: ["Marketing", "Social Media", "Content Creation", "Branding"] 
      },
      { 
        name: "Manroop", 
        role: "Marketing Lead", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Works on outreach initiatives and partnership opportunities.",
        expertise: ["Partnership Building", "Outreach", "Marketing", "Networking"] 
      },
    ],
    general: [
      { 
        name: "Golu", 
        role: "Member", 
        image: "/GoluBhaiya.jpeg", 
        bio: "Active member contributing to web development projects.",
        expertise: ["Web Development", "Frontend", "React", "UI/UX"] 
      },
      { 
        name: "Medha", 
        role: "Member", 
        image: "/MedhaDi.jpeg", 
        bio: "Focuses on UI/UX design and creative aspects of projects.",
        expertise: ["UI/UX Design", "Graphic Design", "Prototyping", "User Research"] 
      },
      { 
        name: "Abhijeet", 
        role: "Member", 
        image: "/Me.jpeg", 
        bio: "Full-stack developer and workshop coordinator.",
        expertise: ["Full-Stack Development", "Workshop Coordination", "JavaScript", "Node.js"] 
      },
      { 
        name: "Ansh", 
        role: "Member", 
        image: "/Ansh.jpeg", 
        bio: "Specializes in mobile app development and backend technologies.",
        expertise: ["Mobile Development", "Backend", "Cloud Services", "API Design"] 
      },
      { 
        name: "Subham", 
        role: "Member", 
        image: "/Subbu.jpeg", 
        bio: "Data science enthusiast and event organizer.",
        expertise: ["Data Science", "Event Organization", "Python", "Data Visualization"] 
      },
      // { name: "Carlos Rodriguez", role: "Member", image: "/placeholder.svg?height=400&width=400" },
    ],
    new: [
      { 
        name: "John Doe", 
        role: "Member", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Freshman with interest in cybersecurity and blockchain.",
        expertise: ["Cybersecurity", "Blockchain", "Ethical Hacking", "Network Security"] 
      },
      { 
        name: "Jane Smith", 
        role: "Member", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Computer science student focusing on AI and machine learning.",
        expertise: ["AI", "Machine Learning", "Python", "Neural Networks"] 
      },
      { 
        name: "Alice Johnson", 
        role: "Member", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Creative coder and design enthusiast.",
        expertise: ["Creative Coding", "Design", "Processing", "Interactive Art"] 
      },
      { 
        name: "Bob Brown", 
        role: "Member", 
        image: "/placeholder.svg?height=400&width=400", 
        bio: "Game development expert and community builder.",
        expertise: ["Game Development", "Unity", "3D Modeling", "Community Building"] 
      },
    ],
  }

  const openMemberModal = (member) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeMemberModal = () => {
    setIsModalOpen(false)
    // Reset selected member after animation completes
    setTimeout(() => setSelectedMember(null), 300)
  }

  return (
    <section id="members" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-3nxl mx-auto text-center mb-16"
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
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg">
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
            <TabsTrigger
              value="new"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
            >
              Members
            </TabsTrigger>
          </TabsList>

          <TabsContent value="head">
            <div className="flex justify-center">
              <MemberCard 
                member={memberCategories.head[0]} 
                index={0} 
                isInView={isInView} 
                featured 
                onClick={() => openMemberModal(memberCategories.head[0])}
              />
            </div>
          </TabsContent>

          <TabsContent value="core">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {memberCategories.core.map((member, index) => (
                <MemberCard 
                  key={index} 
                  member={member} 
                  index={index} 
                  isInView={isInView} 
                  onClick={() => openMemberModal(member)} 
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="general">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {memberCategories.general.map((member, index) => (
                <MemberCard 
                  key={index} 
                  member={member} 
                  index={index} 
                  isInView={isInView} 
                  small 
                  onClick={() => openMemberModal(member)} 
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="new">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {memberCategories.new.map((member, index) => (
                <MemberCard 
                  key={index} 
                  member={member} 
                  index={index} 
                  isInView={isInView} 
                  onClick={() => openMemberModal(member)} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Member Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMemberModal}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-gray-950 border border-purple-500/30 rounded-xl overflow-hidden max-w-2xl w-full shadow-xl shadow-purple-500/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Header background with blur effect */}
                <div className="h-32 bg-purple-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20 mix-blend-multiply" />
                  <div className="absolute inset-0 backdrop-blur-sm" />
                </div>
                
                {/* Close button */}
                <button 
                  onClick={closeMemberModal}
                  className="absolute top-3 right-3 rounded-full p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md transition-colors z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                {/* Profile picture */}
                <div className="absolute -bottom-16 left-6">
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden border-4 border-gray-900 shadow-lg">
                    <Image
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-20 pb-6 px-6">
                <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                <p className="text-purple-400 text-lg mb-4">{selectedMember.role}</p>
                
                <div className="mb-5">
                  <p className="text-gray-300 leading-relaxed">
                    {selectedMember.bio || "No bio available."}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm uppercase text-gray-400 font-medium mb-3 border-b border-gray-800 pb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise && selectedMember.expertise.length > 0 ? (
                        selectedMember.expertise.map((skill, index) => (
                          <span key={index} className="px-3 py-1.5 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-md border border-purple-500/20">
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400">No expertise listed</span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-gray-400 font-medium mb-3 border-b border-gray-800 pb-2">Connect</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                    
                    {/* Additional contact button */}
                    {/* <button className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg border border-purple-500/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Member
                    </button> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function MemberCard({ member, index, isInView, featured = false, small = false, onClick }) {
  return (
    <motion.div
      className={`w-full max-w-xs mx-auto bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.1 * index, duration: 0.8 }}
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-white text-sm bg-purple-500/70 px-3 py-1 rounded-full backdrop-blur-sm">
            View Details
          </span>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className={`${featured ? "text-xl" : "text-lg"} font-bold text-white mb-1`}>
          {member.name}
        </h3>
        <p className="text-purple-400 text-sm">{member.role}</p>
      </div>
    </motion.div>
  )
}
