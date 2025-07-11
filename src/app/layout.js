

// import React from "react"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import Header from "./components/Header"
// import LeftSidebar from "./components/LeftSidebar"
// import RightSidebar from "./components/RightSidebar"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Krishna Kumar Vishwakarma- Portfolio",
//   description: "Software Engineer Portfolio",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-slate-900`}>
//         <div className="ml-20 mr-20">
//           <LeftSidebar />
//           <RightSidebar />
//           <Header />
//           <main>{children}</main>
//         </div>
//       </body>
//     </html>
//   )
// }

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krishna Kumar Vishwakarma - Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        {/* px-0 on mobile, px-6 on tablet, px-20 on desktop */}
        <div className="px-0 sm:px-6 lg:px-20">
          {/* Left Sidebar - hidden on small screens */}
          <div className="hidden lg:block">
            <LeftSidebar />
          </div>

          {/* Right Sidebar - hidden on small screens */}
          <div className="hidden lg:block">
            <RightSidebar />
          </div>

          <Header />

          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
