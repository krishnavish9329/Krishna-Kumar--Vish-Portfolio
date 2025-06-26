import Link from "next/link";

export default function Into() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="text-teal-400 font-mono text-base sm:text-lg mb-4 sm:mb-6">Hello, I am</p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-gray-100 mb-4">
            Krishna Kumar Vishwakarma.
          </h1>

          {/* Subheading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-6 sm:mb-8">
            I build for The People.
          </h2>

          {/* Description */}
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I'm a software engineer who specializes in architecture design, builds, solves. Currently working in{" "}
              <Link href="#" className="text-teal-400 hover:underline">
                TOSS Solution
              </Link>{" "}
              as a Software Engineer. I've built products at{" "}
              <Link href="#" className="text-teal-400 hover:underline">
                GitHub
              </Link>
              . Also a maintainer of{" "}
              <Link href="#" className="text-teal-400 hover:underline">
                label studio
              </Link>
              .
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block bg-transparent border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-colors duration-200 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg rounded"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
