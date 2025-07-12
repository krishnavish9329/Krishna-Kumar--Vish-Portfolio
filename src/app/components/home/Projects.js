"use client"

import { Github, ArrowUpRight, Star, Zap, Eye, Code2, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import ensurekar from "./../../../../public/ensurekar.jpg"
import tossconsultancyservices from "./../../../../public/tossconsultancyservices.jpg"
import Domy from "./../../../../public/Domy.jpg"
import wapp from "./../../../../public/wapp.jpg"
import chatApp from "./../../../../public/chatApp.jpg"
import P from "./../../../../public/p.jpg"
import { fail } from "assert"

const projects = [
  {
    id: 1,
    featured: true,
    title: "Ecommerce Website ensurekar",
    description:
      "An Ensurekar project focused on building a tech-driven business finance platform designed to simplify and support startup and SME growth through streamlined services and integrated financial solutions. Built with Next.js and Node.js, the platform is connected with incubation centers and financial institutions to provide real-time mentorship, networking, and funding support.",
    technologies: ["Next Js", "Node Js", "SQl", "AWS", "Typescript"],
    image: ensurekar,
    github: "#",
    external: "https://ensurekar.com/",
    reverse: false,
    stats: { stars: 234, views: "12.5k", commits: 156 },
    status: "Production",
    year: "2025",
  },
  {
    id: 2,
    featured: true,
    title: "TOSS Consultancy Services",
    description:
      "This is a web-based project developed for Toss Consultancy Services. It's designed to facilitate dynamic web interactions, including automated scrolling, annotation, and advanced web/App development features. It also integrates a custom AI tool to automate traditional processes, significantly enhancing operational efficiency. The system aims to improve user experience, streamline data extraction, and support intelligent, web-based workflows.",
    technologies: ["HTML", "CSS", "JS"],
    image: tossconsultancyservices,
    github: "#",
    external: "https://tossconsultancyservices.com/",
    reverse: true,
    stats: { stars: 189, views: "8.7k", commits: 203 },
    status: "Production",
    year: "2025",
  },
   {
    id: 3,
    featured: true,
    title: "Weather App",
    description:
      "This weather app delivers accurate weather updates for any specific location you choose.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS", "Redux"],
    image: wapp,
    github: "https://github.com/krishnavish9329/weather_app",
    external: "https://krishnavish9329.github.io/weather_app/",
    reverse: false,
    stats: { stars: 123, views: "6.2k", commits: 178 },
    status: "Active",
    year: "2023",
  },
  {
    id: 4,
    featured: false,
    title: "Dummy Project",
    description:
      "The Domy Project was developed for TOSS Solutions And TOSS Consultancy Services.",
    technologies: ["React","Vercel"],
    image: Domy,
    github: "#",
    external: "https://tossconsultancyservices.vercel.app/",
    reverse: true,
    stats: { stars: 567, views: "25.3k", commits: 89 },
    status: "Beta",
    year: "2023",
  },
  {
    id: 5,
    featured: true,
    title: "Real-Time-Chat-app",
    description:
      "A real-time chat application, similar to a social media platform, built using Node.js and Socket.io to enable users to communicate with each other instantly.",
    technologies: ["Node JS", "Socket.io", "HTML","CSS","JS"],
    image: chatApp,
    github: "https://github.com/krishnavish9329/Real-Time-Chat-app",
    external: "#",
    reverse: false,
    stats: { stars: 89, views: "4.1k", commits: 267 },
    status: "Maintained",
    year: "2023",
  },
  // {
  //   id: 6,
  //   featured: true,
  //   title: "Gitlinks",
  //   description:
  //     "A developer tool for managing and organizing Git repositories with enhanced linking capabilities. Streamlines workflow management and repository navigation for development teams with advanced search and categorization features.",
  //   technologies: ["React", "Electron", "Git API", "TypeScript", "Tailwind CSS", "SQLite"],
  //   image: "/placeholder.svg?height=400&width=600",
  //   github: "#",
  //   external: "#",
  //   reverse: true,
  //   stats: { stars: 345, views: "15.8k", commits: 134 },
  //   status: "Active",
  //   year: "2024",
  // },
]

const FloatingParticle = ({ delay = 0 }) => (
  <div
    className="absolute w-1 h-1 bg-teal-400/30 rounded-full animate-pulse"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }}
  />
)

const StatusBadge = ({ status }) => {
  const statusConfig = {
    Production: { color: "bg-green-500/20 text-green-400 border-green-500/30", icon: Zap },
    Active: { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", icon: Eye },
    Research: { color: "bg-purple-500/20 text-purple-400 border-purple-500/30", icon: Code2 },
    Beta: { color: "bg-orange-500/20 text-orange-400 border-orange-500/30", icon: Sparkles },
    Maintained: { color: "bg-teal-500/20 text-teal-400 border-teal-500/30", icon: Star },
  }

  const config = statusConfig[status] || statusConfig.Active
  const Icon = config.icon

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${config.color}`}>
      <Icon className="w-3 h-3" />
      {status}
    </div>
  )
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      return () => section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-slate-900 min-h-screen px-8 py-16 relative overflow-hidden"
      id="work"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <FloatingParticle key={index} delay={index * 0.5} />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400">Explore some of my most impactful and innovative work.</p>
        </div> */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono mb-4">
            <span className="text-teal-400">03.</span>{" "}
            <span className="text-slate-200 font-semibold">Projects</span>
          </h2>
          <div className="w-48 sm:w-64 lg:w-80 h-px bg-slate-600 mb-4"></div>
          <h3 className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-semibold">
            Some Things I've Built
          </h3>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${project.reverse ? "md:flex-row-reverse" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>

              <div className="md:w-1/2 text-white">
                <div className="mb-2">
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-white hover:text-slate-300" />
                  </a>
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="w-5 h-5 text-white hover:text-slate-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  )
}
