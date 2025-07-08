import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section
      className="bg-slate-900 min-h-screen"
      style={{ padding: "64px 23px" }}
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="mb-16">
              <h2 className="text-xl sm:text-2xl font-mono mb-4">
                <span className="text-teal-400">01.</span>{" "}
                <span className="text-slate-200 font-semibold">About Me</span>
              </h2>
              <div className="w-48 sm:w-64 h-px bg-slate-600"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-lg">
              <p>
                Hello! I am Krishna, a 22 y/o and a Software engineer at{" "}
                <span className="text-teal-400 font-medium">TOSS Solution</span>. I enjoy creating things that solve the
                problems of millions people.
              </p>

              <p>
                I've built accessible, inclusive products at{" "}
                <span className="text-teal-400 font-medium">Ensurekar</span>,{" "}
                <span className="text-teal-400 font-medium">TOSS Consultancy Services</span>. Also contributing to the custom annotation and labeling tool{" "}
                <span className="text-teal-400 font-medium">Label Studio</span>,{" "}

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
                  <span>Next Js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>React JS</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>Node Js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>MongoDB | PostgreSQL | MySQL</span>
                </div>
              </div>

              <div className="space-y-3">
                
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>AWS | EC2 | GCP </span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-xs">▸</span>
                  <span>Nginx</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image with Offset Border shifted left */}
          <div className="flex justify-center lg:justify-end lg:mt-16">
            <div className="relative group -translate-x-10"> {/* Shift left by 1rem (16px) */}
              {/* Main Image */}
              <div className="relative w-80 h-96 bg-white rounded-xl overflow-hidden z-10 shadow-lg">
                <Image
                  src="/KrishnaImage.png"
                  alt="Krishna - Software Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Offset Border Frame */}
              <div className="absolute top-5 left-5 w-80 h-96 border-2 border-teal-400 rounded-xl -z-0"></div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
