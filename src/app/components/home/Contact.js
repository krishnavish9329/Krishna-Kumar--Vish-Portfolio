"use client"

import { Star, GitFork } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-slate-900 min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-mono mb-6 sm:mb-8">
            <span className="text-teal-400">04.</span> <span className="text-teal-400">What's Next?</span>
          </h2>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-200 mb-6 sm:mb-8 lg:mb-10">
            Get In Touch
          </h1>
        </div>

        {/* Description */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            I'm currently not for any Full-Time opportunities. But, my inbox is always open for Open Source Projects,
            Freelance Projects, or whether you have a question or just want to have a chat!
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 border-2 border-teal-400 text-teal-400 font-mono text-sm sm:text-base lg:text-lg rounded hover:bg-teal-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20"
          >
            Say Hello
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center">
        <div className="space-y-4">
          <p className="text-slate-400 text-sm sm:text-base font-mono">Designed & Built by Brittany Chiang</p>

          <div className="flex items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span className="font-mono">7,934</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="w-4 h-4" />
              <span className="font-mono">4,064</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
