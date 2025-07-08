"use client"

import { Star, GitFork } from "lucide-react"

export default function ContactSection() {
  return (
    <section 
    className="bg-slate-900 min-h-screen flex flex-col justify-center items-center px-4 py-3 text-center"
    id="contact"
    >
      <div className="max-w-3xl w-full pb-[135px]">
        {/* Section Number and Title */}
        <h2 className="text-teal-400 font-mono text-sm sm:text-base mb-4">
          04. What's Next?
        </h2>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-200 mb-6">
          Get In Touch
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
I’m currently available for Full-Time opportunities as a Full Stack Developer, Software Engineer, or in Manual Software Testing roles.
My skill set includes Next.js, React.js, Node.js, SQL, Git/GitHub, and AI tools like ChatGPT and LM Studio.
Feel free to reach out if you have a project, a question, or just want to connect!
        </p>

        {/* Button */}
        <a
          href="mailto:hello@example.com"
          className="inline-block px-8 py-4 border-2 border-teal-400 text-teal-400 font-mono text-sm sm:text-base rounded hover:bg-teal-400/10 transition hover:shadow-lg hover:shadow-teal-400/20"
        >
          Say Hello
        </a>
      </div>

      {/* Footer */}
      <footer className="text-slate-400 text-xs font-mono text-center">
        <p className="mb-2">Designed by Brittany Chiang</p>
        <div className="flex justify-center items-center gap-6">
          <div className="flex items-center gap-1">
            {/* <Star className="w-4 h-4" />
            <span>7,934</span> */}
          </div>
          <div className="flex items-center gap-1">
            {/* <GitFork className="w-4 h-4" />
            <span>4,064</span> */}
          </div>
        </div>
      </footer>
    </section>
  )
}
