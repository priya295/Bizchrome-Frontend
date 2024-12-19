import React from "react";
import { FaHandshake } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className=" bg-white p-4 flex items-center mb-[30px] justify-center">
      <div className="w-full flex items-center justify-between max-w-7xl bg-blue-600 flex-wrap rounded-3xl p-12 ">
        <div className="max-w-3xl">
          <h1 className="text-white text-[32px]  font-bold  flex items-center gap-2">
            Bizchrome customer care is always here
          </h1>
          <p className="text-white/90 text-[18px] leading-relaxed">
            Go to the Bizchrome customer care self-help page for instant answers
            to frequently asked questions.
          </p>
        </div>
        <button className=" bg-[#fbbf24] hover:bg-[#f59e0b] contact-text transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg">
          Ask Now
        </button>
      </div>
    </div>
  );
};

export default Section4;
