import Link from "next/link";

export default function Into() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center py-10 font-[sf mono]">
      <div className="container mx-auto px-4 sm:px-5">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="text-teal-400 text-sm sm:text-base mb-3">Hello, I am</p>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold text-gray-100 mb-3">
            Krishna Kumar Vishwakarma.
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-5">
            I build for The People.
          </h2>

          {/* Description */}
          <div className="max-w-2xl mb-8">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I'm a software engineer who specializes in Full stack development and problem solving. Currently working in{" "}
              <Link href="#" className="text-teal-400 hover:underline">TOSS Solution</Link> as a Software Engineer. I've built products at{" "}
              <Link href="https://ensurekar.com/" className="text-teal-400 hover:underline">Ensurekar</Link>,{" "}
              <Link href="https://tossconsultancyservices.com/" className="text-teal-400 hover:underline">TOSS Consultancy Services</Link>. Also a customizer of{" "}
              <Link href="#" className="text-teal-400 hover:underline">Label Studio</Link>.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="inline-block border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-colors duration-200 px-5 py-2 text-sm sm:text-base rounded"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
