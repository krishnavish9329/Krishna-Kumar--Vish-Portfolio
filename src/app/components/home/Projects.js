"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    featured: true,
    title: "Multi-Stage Online Hate Detection",
    description:
      "A machine learning project focused on detecting and classifying online hate speech using multi-stage analysis. Built with Python and various ML libraries to identify harmful content across social media platforms with high accuracy and real-time processing capabilities.",
    technologies: ["Python", "TensorFlow", "NLP", "Machine Learning", "React", "Flask"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    external: "#",
    reverse: false,
  },
  {
    id: 2,
    featured: true,
    title: "GitHub User Analytics",
    description:
      "A comprehensive analytics dashboard for GitHub users, providing deep insights into contribution patterns, repository statistics, and coding activity. Features interactive charts, detailed metrics visualization, and performance tracking across multiple repositories.",
    technologies: ["React", "D3.js", "GitHub API", "Node.js", "MongoDB", "Chart.js"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    external: "#",
    reverse: true,
  },
  {
    id: 3,
    featured: true,
    title: "COVID-19 Rapid Tester",
    description:
      "An AI-powered medical imaging application for rapid COVID-19 detection using chest X-rays. Implements deep learning models to assist healthcare professionals in quick and accurate diagnosis with confidence scoring and detailed analysis reports.",
    technologies: ["Python", "TensorFlow", "Medical Imaging", "Flask", "React", "OpenCV"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    external: "#",
    reverse: false,
  },
  {
    id: 4,
    featured: true,
    title: "Save Plastic Gift Pre Card/Guard.io",
    description:
      "An environmental initiative platform focused on reducing plastic waste through digital gift cards and reward systems. Features user engagement tracking, environmental impact metrics, and gamification elements to encourage sustainable practices.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS", "Redux"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    external: "#",
    reverse: true,
  },
  {
    id: 5,
    featured: true,
    title: "InterCall Core Documentation",
    description:
      "Comprehensive documentation platform for InterCall's core services and APIs. Built with modern documentation tools and features interactive examples, code snippets, and real-time API testing capabilities for developers.",
    technologies: ["Docusaurus", "React", "Markdown", "TypeScript", "Vercel", "MDX"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    external: "#",
    reverse: false,
  },
  {
    id: 6,
    featured: true,
    title: "Gitlinks",
    description:
      "A developer tool for managing and organizing Git repositories with enhanced linking capabilities. Streamlines workflow management and repository navigation for development teams with advanced search and categorization features.",
    technologies: ["React", "Electron", "Git API", "TypeScript", "Tailwind CSS", "SQLite"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    external: "#",
    reverse: true,
  },
]

export default function ProjectsSection() {
  return (
    <section className="bg-slate-900 min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
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

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              {/* Mobile Layout */}
              <div className="block lg:hidden">
                <div className="space-y-6">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-lg bg-teal-400/20">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-48 sm:h-64 object-cover transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-teal-400/40 mix-blend-multiply transition-all duration-300 group-hover:bg-teal-400/20"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-teal-400 font-mono text-sm mb-2">Featured Project</p>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-4">{project.title}</h3>
                    </div>

                    <div className="bg-slate-800/60 p-4 sm:p-6 rounded-lg shadow-lg">
                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs sm:text-sm font-mono text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.external}
                        className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                        aria-label="External Link"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div
                  className={`grid grid-cols-12 gap-8 xl:gap-12 items-center ${project.reverse ? "text-right" : ""}`}
                >
                  <div className={`col-span-7 ${project.reverse ? "col-start-6" : "col-start-1"}`}>
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-lg bg-teal-400/20">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-teal-400/40 mix-blend-multiply transition-all duration-300 group-hover:bg-teal-400/20"></div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`col-span-6 ${project.reverse ? "col-start-1 row-start-1" : "col-start-7"} space-y-6`}
                  >
                    <div>
                      <p className="text-teal-400 font-mono text-sm mb-2">Featured Project</p>
                      <h3 className="text-2xl xl:text-3xl font-bold text-slate-200 mb-4">{project.title}</h3>
                    </div>

                    <div className="bg-slate-800/60 p-6 xl:p-8 rounded-lg shadow-lg relative z-10">
                      <p className="text-slate-300 leading-relaxed">{project.description}</p>
                    </div>

                    <div className={`flex flex-wrap gap-4 ${project.reverse ? "justify-end" : ""}`}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-sm font-mono text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`flex items-center gap-6 ${project.reverse ? "justify-end" : ""}`}>
                      <a
                        href={project.github}
                        className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={project.external}
                        className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                        aria-label="External Link"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
