import React from "react";
import banner from "../../assets/banner-img.png";

const Section1 = () => {
  return (
    <div className="min-h-screen rounded-bl-[140px] rounded-br-[140px] bg-[#f2fafa]">
      <main className="container  mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Are you looking for Freelancers?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Hire Great Freelancers, Fast. Spacelance helps you hire elite
              freelancers at a moment&apos;s notice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                Hire a freelancer
              </button>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="search freelance work"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Search"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-8 top-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-blue-100 rounded-full opacity-50" />
            </div>
            <div className="relative z-10">
           <img className="w-full" src={banner}/>
            </div>
          
          </div>
        </div>
      </main>
    </div>
  );
};

export default Section1;
