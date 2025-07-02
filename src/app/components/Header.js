// "use client"
// import React, { useState } from "react";
// import Link from "next/link"; 

// // Simple custom Button component
// function Button({ children, className = "", ...props }) {
//   return (
//     <button
//       className={`px-3 py-2 sm:px-4 sm:py-2 rounded-md border text-sm sm:text-base ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
//       <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
//         <div className="flex items-center justify-between">
          
//           {/* LEFT SECTION */}
//           <div className="flex items-center space-x-8 lg:space-x-12">
//             {/* Logo */}
//             <Link href="/" className="flex items-center flex-shrink-0">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg sm:text-xl">K</span>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//               <Link
//                 href="/about"
//                 className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"
//               >
//                 <span className="text-teal-400 font-mono text-sm">01.</span>
//                 <span className="text-sm xl:text-base">About</span>
//               </Link>
//               <Link
//                 href="/experience"
//                 className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"
//               >
//                 <span className="text-teal-400 font-mono text-sm">02.</span>
//                 <span className="text-sm xl:text-base">Experience</span>
//               </Link>
//               <Link
//                 href="/work"
//                 className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"
//               >
//                 <span className="text-teal-400 font-mono text-sm">03.</span>
//                 <span className="text-sm xl:text-base">Work</span>
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"
//               >
//                 <span className="text-teal-400 font-mono text-sm">04.</span>
//                 <span className="text-sm xl:text-base">Contact</span>
//               </Link>
//             </nav>
//           </div>

//           {/* RIGHT SECTION */}
//           <div className="flex items-center space-x-4">
//             {/* Desktop Resume Button */}
//             <div className="hidden sm:block">
//               <Button className="bg-transparent border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-colors duration-200">
//                 <Link href="/resume">Resume</Link>
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="lg:hidden text-gray-300 hover:text-teal-400 p-1"
//               onClick={toggleMobileMenu}
//               aria-label="Toggle mobile menu"
//             >
//               <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMobileMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <div className={`lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen 
//             ? 'max-h-96 opacity-100 mt-4' 
//             : 'max-h-0 opacity-0 overflow-hidden'
//         }`}>
//           <nav className="flex flex-col space-y-4 pb-4">
//             <Link
//               href="/about"
//               className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-3 px-2 py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <span className="text-teal-400 font-mono text-sm">01.</span>
//               <span className="text-base">About</span>
//             </Link>
//             <Link
//               href="/experience"
//               className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-3 px-2 py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <span className="text-teal-400 font-mono text-sm">02.</span>
//               <span className="text-base">Experience</span>
//             </Link>
//             <Link
//               href="/work"
//               className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-3 px-2 py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <span className="text-teal-400 font-mono text-sm">03.</span>
//               <span className="text-base">Work</span>
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-3 px-2 py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <span className="text-teal-400 font-mono text-sm">04.</span>
//               <span className="text-base">Contact</span>
//             </Link>
            
//             {/* Mobile Resume Button */}
//             <div className="pt-2 px-2">
//               <Button 
//                 className="w-full bg-transparent border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-colors duration-200"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Link href="/resume" className="block w-full">Resume</Link>
//               </Button>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Simple custom Button component
function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-3 py-2 sm:px-4 sm:py-2 rounded-md border text-sm sm:text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-slate-900 border-b border-slate-800 sticky top-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* LEFT SECTION */}
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">K</span>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {["about", "experience", "work", "contact"].map((path, i) => (
                <Link
                  key={path}
                  href={`/${path}`}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span className="text-teal-400 font-mono text-sm">
                    {`0${i + 1}.`}
                  </span>
                  <span className="text-sm xl:text-base">
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button className="bg-transparent border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-colors duration-200">
                <Link href="/resume">Resume</Link>
              </Button>
            </div>
            <button
              className="lg:hidden text-gray-300 hover:text-teal-400 p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4 pb-4">
            {["about", "experience", "work", "contact"].map((path, i) => (
              <Link
                key={path}
                href={`/${path}`}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center space-x-3 px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-teal-400 font-mono text-sm">
                  {`0${i + 1}.`}
                </span>
                <span className="text-base">
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </span>
              </Link>
            ))}
            <div className="pt-2 px-2">
              <Button
                className="w-full bg-transparent border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/resume" className="block w-full">
                  Resume
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
