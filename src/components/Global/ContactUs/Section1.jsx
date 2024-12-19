import React from 'react'

const Section1 = () => {
  return (
    <div className="relative min-h-[400px] w-full flex flex-col items-center justify-center text-white">
    {/* Background image with overlay */}
    <div className="absolute inset-0 custom-bg1 bg-cover bg-center">
      <div className="absolute"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center space-y-6">
      <h1 className="text-5xl md:text-7xl attractive-font font-bold text-blue-600">
        CONTACT US
      </h1>

      {/* Breadcrumb navigation */}
      <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
        <a href="/" className="hover:text-blue-600] text-black transition-colors">
          HOME
        </a>
        <span className="text-black">›</span>
        <a href="/pages" className="hover:text-blue-600 text-black transition-colors">
          PAGES
        </a>
        <span className="text-black">›</span>
        <span className="text-blue-600">Contact Us</span>
      </nav>
    </div>
  </div>
  )
}

export default Section1