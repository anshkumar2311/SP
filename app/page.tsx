import Hero from "@/components/hero"
import About from "@/components/about"
import Members from "@/components/members"
import Events from "@/components/events"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <Hero />
      <About />
      <Members />
      <Events />
      <Contact />
    </main>
  )
}

