import React, { useState, useEffect } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import freelancer1 from "../../../assets/freelancer1.jpeg"
import freelancer2 from "../../../assets/freelancer2.jpeg"
import freelancer3 from "../../../assets/freelancer3.jpeg"



export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Elevate Your Career with Bizchrome",
      subtitle: "Unlock new opportunities and take your projects to the next level.",
      image: freelancer1,
    },
    {
      title: "Transform Your Professional Journey",
      subtitle: "Your next big project is just a click away.",
      image: freelancer2,
    },
    {
      title: "Propel Your Success with Bizchrome",
      subtitle: "Discover the potential of your projects waiting to be realized.",
      image: freelancer3,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#1a2238] relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-40 h-40 rounded-full border border-cyan-500/20" />
        <div className="absolute bottom-20 right-40 w-60 h-60 rounded-full border border-cyan-500/20" />
        <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-cyan-500/40" />
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex items-center mb-12">
          <h2 className="text-white text-2xl font-bold">BE INVEST</h2>
        </div>

        <div className="relative h-[calc(100vh-120px)]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                <div className="space-y-6">
                  <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 text-lg md:text-xl max-w-xl">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <button className="bg-cyan-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-cyan-600 transition-colors">
                      Get Started
                      <FaPhoneAlt className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm">Need help?</span>
                      <div className="flex items-center gap-2">
                        <FaPlus className="w-5 h-5 text-cyan-500" />
                        <span className="text-lg">(808) 555-0111</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10 rounded-2xl overflow-hidden">
                    <img
                      src={slide.image}
                      alt="Financial services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative shapes */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-cyan-500 w-8'
                  : 'bg-gray-400 hover:bg-cyan-400'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

