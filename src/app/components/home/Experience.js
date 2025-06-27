"use client"

import { useState } from "react"

const experiences = [
  {
    id: "gitpod-1",
    company: "Gitpod",
    position: "Software Engineer",
    companyHighlight: "Gitpod",
    period: "Nov 2022 - Present",
    description: "I have been working as a Software Engineer at Gitpod.",
    highlights: [
      "🚀 Leading Gitpod Website using Svelte & TypeScript.",
      "📄 Product Engineering Architecture & Docs.",
      "🚀 Gitpod for Open Source",
    ],
    note: {
      text: "Most of the company's work is open-source, so you can see ",
      link: "my pull requests for Gitpod on GitHub!",
      continuation: " If you look around, you might spot me chiming in on a ",
      secondLink: "variety of other pull requests",
      ending: " and issue discussions as well.",
    },
  },
  {
    id: "gitpod-2",
    company: "Gitpod",
    position: "Frontend Developer",
    companyHighlight: "Gitpod",
    period: "Jan 2022 - Nov 2022",
    description: "Worked on frontend development at Gitpod.",
    highlights: [
      "🚀 Built user interface components using React & TypeScript.",
      "📄 Collaborated on design system implementation.",
    ],
  },
  {
    id: "github",
    company: "Github",
    position: "Open Source Contributor",
    companyHighlight: "Github",
    period: "2021 - 2022",
    description: "Contributed to various open source projects.",
    highlights: ["🚀 Contributed to multiple repositories and projects."],
  },
  {
    id: "greenstand",
    company: "GreenStand",
    position: "Full Stack Developer",
    companyHighlight: "GreenStand",
    period: "2020 - 2021",
    description: "Developed environmental impact tracking applications.",
    highlights: ["🚀 Built tree tracking and verification systems."],
  },
  {
    id: "hikaya",
    company: "Hikaya",
    position: "Software Developer",
    companyHighlight: "Hikaya",
    period: "2019 - 2020",
    description: "Worked on humanitarian technology solutions.",
    highlights: ["📄 Developed data management platforms."],
  },
  {
    id: "bread",
    company: "Bread",
    position: "Junior Developer",
    companyHighlight: "Bread",
    period: "2018 - 2019",
    description: "Started career in fintech development.",
    highlights: ["🚀 Built payment processing features."],
  },
  {
    id: "techvault",
    company: "TechVault",
    position: "Intern",
    companyHighlight: "TechVault",
    period: "2017 - 2018",
    description: "Internship focused on web development.",
    highlights: ["📄 Learned modern web development practices."],
  },
]

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState("gitpod-1")

  const currentExperience = experiences.find((exp) => exp.id === activeExperience) || experiences[0]

  return (
    <div className="bg-slate-900 min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-mono mb-4">
            <span className="text-teal-400">02.</span>{" "}
            <span className="text-slate-200 font-semibold">Experience</span>
          </h2>
          <div className="w-48 sm:w-64 h-px bg-slate-600"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-6">
              Where I've Worked
            </h3>

            {/* Company List */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible">
              <div className="flex lg:flex-col min-w-max lg:min-w-0">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExperience(exp.id)}
                    className={`relative text-left px-4 py-3 text-sm font-mono transition-all duration-200 whitespace-nowrap lg:whitespace-normal border-l-2 ${
                      activeExperience === exp.id
                        ? "border-teal-400 bg-teal-400/5 text-teal-400"
                        : "border-slate-700 text-slate-400 hover:bg-slate-800/50 hover:text-teal-300"
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0">
            {/* Job Title */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-2">
                {currentExperience.position} @{" "}
                <span className="text-teal-400">{currentExperience.companyHighlight}</span>
              </h3>
              <p className="text-sm font-mono text-slate-400">{currentExperience.period}</p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {currentExperience.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {currentExperience.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-slate-300">
                  <span className="text-teal-400 mr-3 mt-0.5 text-sm">▸</span>
                  <span className="text-base leading-relaxed">
                    {highlight.includes("Website") ? (
                      <>
                        {highlight.split("Website")[0]}
                        <span className="text-teal-400 font-medium">Website</span>
                        {highlight.split("Website")[1]}
                      </>
                    ) : highlight.includes("Gitpod for Open Source") ? (
                      <>
                        {highlight.split("Gitpod for Open Source")[0]}
                        <span className="text-teal-400 font-medium">Gitpod for Open Source</span>
                      </>
                    ) : (
                      highlight
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* Special Note */}
            {currentExperience.note && (
              <div className="border-l-4 border-slate-600 pl-4 py-2 bg-slate-800/30">
                <p className="text-slate-300 italic text-base leading-relaxed">
                  {currentExperience.note.text}
                  <span className="text-teal-400 font-medium hover:underline cursor-pointer">
                    {currentExperience.note.link}
                  </span>
                  {currentExperience.note.continuation}
                  <span className="text-teal-400 font-medium hover:underline cursor-pointer">
                    {currentExperience.note.secondLink}
                  </span>
                  {currentExperience.note.ending}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
