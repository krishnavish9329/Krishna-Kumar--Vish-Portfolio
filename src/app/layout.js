

import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Krishna Kumar Vishwakarma- Portfolio",
  description: "Software Engineer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <div className="ml-20 mr-20">
          <LeftSidebar />
          <RightSidebar />
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

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
//       <body className={`${inter.className} bg-slate-900 min-h-screen`}>
//         {/* Header spans full width */}
//         <Header />

//         {/* Main content area with sidebars */}
//         <div className="relative">
//           <LeftSidebar />
//           <RightSidebar />

//           {/* Main content with proper mobile spacing */}
//           <main>{children}</main>
//         </div>
//       </body>
//     </html>
//   )
// }

