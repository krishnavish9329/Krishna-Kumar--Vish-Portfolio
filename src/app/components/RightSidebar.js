export default function RightSidebar() {
  return (
    <div className="fixed right-0 top-0 h-full w-20 bg-slate-900 z-40 flex items-center justify-center">
      <div className="flex flex-col items-center h-full justify-center">
        {/* Vertical Line */}
        <div className="w-px h-24 bg-gray-600 mb-8"></div>

        {/* Rotated Email */}
        <div className="transform rotate-90 origin-center">
          <a
            href="mailto:Krishna.vish9329@gmail.com"
            className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm font-mono tracking-wider whitespace-nowrap"
          >
            Krishna.vish9329@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
