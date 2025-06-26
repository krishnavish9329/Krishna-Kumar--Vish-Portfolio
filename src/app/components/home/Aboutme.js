import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="bg-slate-900 min-h-screen px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                <span className="text-teal-400 font-mono text-lg mr-2">01.</span>
                About Me
              </h2>
              <div className="w-64 h-px bg-gray-600 absolute top-8"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-lg">
              <p>
                Hello! I am Krishna, a 22 y/o and a Software engineer at{" "}
                <span className="text-teal-400 font-medium">TOSS Solution</span>. I enjoy creating things that solve the
                problems of millions people. Also, I love to contributing to Open Source Projects in my spare time &
                weekends.
              </p>

              <p>
                I've built accessible, inclusive products at <span className="text-teal-400 font-medium">GitHub</span>,{" "}
                <span className="text-teal-400 font-medium">TechVault</span> for millions of people. Also collaborating
                & actively contributing to various Open Source Organizations like{" "}
                <span className="text-teal-400 font-medium">MetaCall</span>,{" "}
                <span className="text-teal-400 font-medium">Go Students</span>,{" "}
                <span className="text-teal-400 font-medium">IOSF</span>, for creating various Open Source Products.
              </p>

              <p className="pt-2">Here are a few technologies I've been working with recently:</p>
            </div>

            {/* Technology List */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-gray-300 font-mono text-sm max-w-lg">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>Docker | K8s</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>Circle CI | GitHub Actions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>YAML</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>MongoDB | PostgreSQL | MySQL</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>Svelte</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>AWS | GCP | DigitalOcean</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>Ruby | Ruby on Rails</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>Nginx | Jenkins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end lg:mt-16">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-80 h-96 bg-white rounded-lg overflow-hidden">
                <Image
                  src="/KrishnaImage.png"
                  alt="Krishna - Software Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Teal Border Frame */}
              <div className="absolute top-6 left-6 w-80 h-96 border-2 border-teal-400 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

